import { LumaPage, SortOptions } from "../pages/luma";
import { By } from "selenium-webdriver";

const page = new LumaPage();

describe("testing the Luma page for bugs", () => {
  beforeAll(async () => {
    await page.navigate();
  }, 20000);
  afterAll(async () => {
    await page.driver.quit();
  });

  test("the search bar is editable", async () => {
    await page.search.addQuery();
    const queryString = await page.search.getQuery();
    expect(queryString).toBe(page.search.term);
  });
  test("the search bar will suggest search terms", async () => {
    const suggestions = await page.search.getSuggestions();
    suggestions.forEach((suggestion) => expect(suggestion).toMatch(/pant/i));
  });
  test("a search yields relevant results", async () => {
    await page.click(page.search.button);
    await page.search.waitForResultsPage();
    await page.wait1sec();
    const links = await page.search.getProductLinks();
    links.forEach((link) => expect(link).toMatch(/pant/i));
    expect(links.length).toBe(12);
  });
  test("a search suggests related search terms", async () => {
    const relatedTerms = await page.search.getRelated();
    relatedTerms.forEach((term) => expect(term).toMatch(/pant/i));
  });
  test("items can be sorted by relevance, in ascending and descending order", async () => {
    await page.sort.changeSortDirection();
    await page.wait1sec();
    const currentDirection = await page.sort.checkSortDirection();
    expect(currentDirection).toBe("asc");
  });
  test("items can be sorted by name, in ascending and descending order", async () => {
    await page.sort.selectOption(SortOptions.name);
    await page.wait1sec();
    const names = await page.search.getProductLinks();
    const sortedNames = names.sort();
    expect(names).toEqual(sortedNames);

    await page.sort.changeSortDirection();
    await page.wait1sec();
    const currentDirection = await page.sort.checkSortDirection();
    expect(currentDirection).toBe("desc");

    const newNames = await page.search.getProductLinks();
    const newSortedNames = newNames.sort().reverse();
    expect(newNames).toEqual(newSortedNames);
  }, 10000);
  test("items can be sorted by price, in ascending and descending order", async () => {
    await page.sort.selectOption(SortOptions.price);
    await page.wait1sec();
    const prices = (await page.sort.getPrices()).map((priceStr) => +priceStr);
    const pricesSorted = prices.sort((a, b) => b - a);
    expect(prices).toEqual(pricesSorted);

    await page.sort.changeSortDirection();
    await page.wait1sec();
    const currentDirection = await page.sort.checkSortDirection();
    expect(currentDirection).toBe("asc");

    const newPrices = (await page.sort.getPrices()).map(
      (priceStr) => +priceStr
    );
    const newSortedPrices = prices.sort((a, b) => a - b);
    expect(newPrices).toEqual(newSortedPrices);
  }, 10000);
});

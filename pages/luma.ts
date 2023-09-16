import { BasePage } from "../basePage";
import { By, until } from "selenium-webdriver";

export enum SortOptions {
  name = "name",
  price = "price",
  relevance = "relevance",
}

export class LumaPage extends BasePage {
  // search

  constructor() {
    super({ url: "https://magento.softwaretestingboard.com/" });
  }

  search = {
    input: By.id("search"),
    button: By.css("button.action.search"),
    term: "pant",
    suggestions: By.xpath('//li[@role="option"]'),
    relatedItems: By.css("dd"),
    productLinks: By.className("product-item-link"),
    pageTitle: By.className("base"),
    addQuery: async () => {
      await this.click(this.search.input);
      await this.setInput(this.search.input, `${this.search.term}`);
    },
    getQuery: async () => {
      return this.getAttribute(this.search.input, "value");
    },
    getSuggestions: async () => {
      return this.getTexts(this.search.suggestions);
    },
    getRelated: async () => {
      return this.getTexts(this.search.relatedItems);
    },
    getProductLinks: async () => {
      return this.getTexts(this.search.productLinks);
    },
    waitForResultsPage: async () => {
      const pageTitleElement = await this.getElement(this.search.pageTitle);
      return this.driver.wait(
        until.elementTextContains(pageTitleElement, "Search results")
      );
    },
  };
  sort = {
    options: By.id("sorter"),
    changeSortDirectionButton: By.css(".action.sorter-action"),
    nameOption: By.xpath('//option[@value="name"]'),
    priceOption: By.xpath('//option[@value="price"]'),
    relevanceOption: By.xpath('//option[@value="relevance"]'),
    prices: By.className("price"),
    changeSortDirection: async () => {
      return this.click(this.sort.changeSortDirectionButton);
    },
    selectOption: async (sortOption: SortOptions) => {
      const option =
        sortOption === SortOptions.name
          ? this.sort.nameOption
          : sortOption === SortOptions.price
          ? this.sort.priceOption
          : this.sort.relevanceOption;
      await this.click(this.sort.options);
      await this.click(option);
    },
    checkSortDirection: async () => {
      const directionOnClick = await this.getAttribute(
        this.sort.changeSortDirectionButton,
        "data-value"
      );
      if (directionOnClick === "asc") return "desc";
      else return "asc";
    },
    getPrices: async () => {
      return this.getTexts(this.sort.prices);
    },
  };
  async wait1sec() {
    await this.driver.sleep(1000);
  }
}

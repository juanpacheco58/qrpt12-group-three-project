import { Yuma } from "./yumaObjects";
import { Driver } from "selenium-webdriver/chrome";
const yuma = new Yuma();
const fs = require("fs");

test("Adding items to Cart", async () => {
  await yuma.navigate();
  await yuma.search("Watch");
  await yuma.click(yuma.watch);
  await yuma.click(yuma.addToCart);
  let successText = await yuma.getText(yuma.addedMsg);
  expect(successText).toContain("You added Dash Digital Watch to your");
  await yuma.driver.sleep(5000);
  await yuma.click(yuma.shoppingCart);
  await yuma.click(yuma.viewEditCart);
  /*fs.writeFile(`${__dirname}/google.png`,
    await yuma.driver.takeScreenshot(), "base64",
    (e)=> {
        if (e) console.log(e)
        else console.log("a picture is worth a thousand words");
    }); */
  await yuma.driver.sleep(5000);
  await yuma.getResults();
  await yuma.driver.sleep(5000);
  await yuma.driver.quit();
}, 50000);

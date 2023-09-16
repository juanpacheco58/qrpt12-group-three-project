import {By} from 'selenium-webdriver'; 
import { BasePage } from './basePage';

export class Yuma extends BasePage {
headerLogo: By = By.xpath('//a[@class="logo"]');
searchBar: By = By.name('q');
radiantTee: By = By.xpath('//a[@title="Radiant Tee"]');
gwynTee: By = By.xpath('//a[@title="Gwyn Endurance Tee"]');
checkout: By = By.xpath('//button[@class="action primary checkout"]')
sorter: By = By.id("sorter");
//productNameSort
//priceNameSort
wishListBtn: By = By.xpath('//a[@class="action towishlist"]');

//Write Review
addReviewBtn: By = By.xpath('//a[text() = "Add Your Review"]');
nameInput: By = By.id("nickname_field");
summaryInput: By = By.id("summary_field");
reviewInput: By = By.id("review_field");
rating: By = By.css("label#Rating_2_label")

//rating: By = By.name("ratings[4]")
//rating: By = By.xpath('(//input[@class="radio"])[3]');
submitBtn: By = By.xpath('//button[@class="action submit primary"]');

//Add to Wish List
lonoYogaShort: By = By.xpath('(//strong[@class="product name product-item-name"])[1]');
wishResults: By = By.xpath('//main[@class="page-main"]');
//wishListBtn: By = By.xpath('//a[@class="action towishlist"]');

errorMsg: By = By.xpath('//div[@class="message-error error message"]');


//Add to Compare 
addCompareBtn: By = By.xpath('//a[@class="action tocompare"]');
compareProducts: By = By.xpath('//a[@class="action compare"]');
sellersHot: By = By.xpath('//h2[text() = "Hot Sellers"]');
compareResults: By = By.xpath('//div[@class="page-wrapper"]');

//Add to Cart
shoppingCart: By = By.xpath('//a[@class="action showcart"]');
addToCart: By = By.xpath('//button[@class="action primary tocart"]');
cartResults: By = By.xpath('//main[@class="page-main"]');
watch: By = By.xpath('(//a[@class="product-item-link"])[2]');
addedMsg: By = By.xpath('//div[@class="message-success success message"]');
viewEditCart: By = By.xpath('(//div[@class="secondary"])[2]');

//Proceed to CheckOut 
checkOut: By = By.xpath('(//button[@class="action primary checkout"])[2]');
emailField: By = By.xpath('(//input[@name="username"])[2]')
firstName: By = By.xpath('(//input[@class="input-text"])[5]');
lastName: By = By.xpath('(//input[@class="input-text"])[6]')
streetAddress: By = By.xpath('(//input[@class="input-text"])[8]');
city: By = By.name("city");
zipCode: By = By.name("postcode");
state: By = By.xpath('(//select[@class="select"])[1]');  
cali: By = By.xpath('//option[@data-title="California"]');
phoneNumber: By = By.name("telephone");
shippingMethod: By = By.xpath('(//td[@class="col col-method"])[1]')
next: By = By.xpath('//button[@class="button action continue primary"]');
ship: By = By.xpath('(//div[@class="step-title"])[1]');







constructor() {
    super({url:'https://magento.softwaretestingboard.com/'});
}   
async search(searchTerm: string) {
    return this.setInput(this.searchBar,`${searchTerm}\n`)
};
async getResults() {
    return this.getText(this.cartResults)
};
    
};



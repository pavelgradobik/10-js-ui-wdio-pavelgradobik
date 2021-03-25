type Color = 'Blue';

export class CanonCameraComponent {
  private get root(): WebdriverIO.Element {
    return $('#content .col-sm-4');
  }

  isOpen(): boolean {
    return this.root.$('h1').isDisplayed();
  }

  selectProductColorOption(coloroption: Color) {
    const selectColorOption = this.root.$('select');
    browser.waitUntil(
      () => {
        try {
          selectColorOption.selectByVisibleText(coloroption);
          return true;
        } catch {
          return false;
        }
      },
      {
        timeout: 3000,
        timeoutMsg: 'Expect the color option is visible and able to select',
      }
    );
  }

  setQuantityToBuy(quantity: string) {
    const quantityInput = this.root.$('#input-quantity');
    quantityInput.isDisplayed();
    quantityInput.setValue(quantity);
  }

  addProductToCart(){
    const addToCartButton = this.root.$('#button-cart');
    addToCartButton.isDisplayed();
    addToCartButton.click();
  } 
  
  get canonCameraPrice(){
    return this.root.$('h2');
  }
}

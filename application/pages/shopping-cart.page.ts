export class ShoppingCart {
  
  isOpen(): boolean {
    return $('#checkout-cart h1').isDisplayed();
  }
  
  private get shoppingCartItems(): WebdriverIO.Element[] {
    return $$('#content form tbody tr');
  }

  get shoppingCartTitle() {
    return $('#content h1');
  }

  get removeFromCartButton() {
    return $('[data-original-title="Remove"]');
  }
  // set productToSearch(value: string){
  //     this._prodAtCart = $(`[img[title="${value}"]`);
  // }

  // get productFromCart() {
  //   return this._prodAtCart;
  // }

  get productQuantity() {
    return this.shoppingCartItems.length;
  }
}

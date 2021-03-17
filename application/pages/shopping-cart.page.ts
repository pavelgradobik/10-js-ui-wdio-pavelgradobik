export class ShoppingCart {
  private _prodAtCart: WebdriverIO.Element;
  
  isOpen(): boolean{
    return $('#checkout-cart h1').isDisplayed();
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

  get productFromCart(){
      return this._prodAtCart;
  }
}

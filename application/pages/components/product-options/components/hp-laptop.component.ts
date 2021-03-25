export class HPLaptopComponent{
  private get root(): WebdriverIO.Element {
    return $('#content .col-sm-4');
  }

  isOpen(): boolean{
    return this.root.$('h1').isDisplayed();
  }

  setDeliveryDateInAWeek(){
      let todayDate: Date = new Date();
      let nextWeek: Date = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() +7);
      const dateInput = this.root.$('[class="input-group date"] input');
      dateInput.setValue(nextWeek.toLocaleDateString('fr-ca', { year: 'numeric', month: '2-digit', day: '2-digit' }));

  }

  setQuantityToBuy(quantity: string){
      const quantityInput = this.root.$('input[name="quantity"]');
      quantityInput.isDisplayed()
      quantityInput.setValue(quantity);
  }

  addProductToCart(){
    const addToCartButton = this.root.$('#button-cart');
    addToCartButton.isDisplayed();
    addToCartButton.click();
  }  

  get laptopPrice(){
    return this.root.$('h2');
  }
}

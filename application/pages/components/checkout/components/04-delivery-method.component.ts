export class DeliveryMethodComponent {
  private get root(): WebdriverIO.Element {
    return $('div#collapse-shipping-method').parentElement();
  }

  commentForOrderInput(valueToInput: string) {
    const inputField = this.root.$('[name="comment"]');
    expect(inputField).toBeVisible({message: 'imput field did not visible'});
    inputField.setValue(valueToInput);
  }

  continueButton(){
    const cButton = this.root.$('input#button-shipping-method');
    expect(cButton).toBeVisible({
      message: 'continue button did not available',
    });
    cButton.click();
  }
}

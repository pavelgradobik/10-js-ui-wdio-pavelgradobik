export class DeliveryMethodComponent {
  private get root(): WebdriverIO.Element {
    return $('div#collapse-shipping-method').parentElement();
  }

  get commentToOrderInput() {
    return this.root.$('[name="comment"]');
  }

  continueButton(): void {
    const cButton = this.root.$('input#button-shipping-address');
    expect(cButton).toBeVisible({
      message: 'continue button did not available',
    });
    cButton.click();
  }
}

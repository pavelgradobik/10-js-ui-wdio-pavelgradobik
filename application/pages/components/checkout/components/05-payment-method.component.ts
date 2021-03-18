export class PaymentMethodComponent {
  private get root(): WebdriverIO.Element {
    return $('div#collapse-payment-method').parentElement();
  }

  termsAndConditionsCheckboxAgree() {
    const checkBox = this.root.$('[name="agree"]');
    expect(checkBox).toBeVisible({ message: 'agree checkbox did not visible' });
    checkBox.click();
  }

  continueButton() {
    const cButton = this.root.$('input#button-payment-method');
    expect(cButton).toBeVisible({
      message: 'continue button did not available',
    });
    cButton.click();
  }
}

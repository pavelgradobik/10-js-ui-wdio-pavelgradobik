export class CheckoutOptionsComponent {
  private get root(): WebdriverIO.Element {
    return $('div#collapse-checkout-option').parentElement();
  }

  newCustomerCheckOutoption(option: string) {
    const checkboxSelector = this.root.$(`input[value="${option}"]`);
    expect(checkboxSelector).toBeVisible({
      message: 'checkbox did not visible',
    });
    checkboxSelector.click();
  }

  continue() {
    const continueButton = this.root.$('input[value="Continue"]');
    expect(continueButton).toBeClickable({
      message: 'Continue button did not visible',
    });
    continueButton.click();
  }
}

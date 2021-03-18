export class AccountAndBillingDetailsComponent {
  private get root(): WebdriverIO.Element {
    return $('div#collapse-payment-address').parentElement();
  }

  deliveryEquialsBillingCheckbox() {
    const checkbox = $('input[name="shipping_address"]');
    expect(checkbox).toBeVisible({
      message: 'deliveryeqbilling checkbox did not visible',
    });
    checkbox.click();
  }

  continueButton() {
    const continueButton = this.root.$('input#button-guest');
    expect(continueButton).toBeVisible({
      message: "Continue button didn't appear",
    });
    continueButton.click();
  }

  fillAllAddresses(data: IAccountAndBilling) {
    this.root.$('#input-payment-firstname').setValue(data.firstName);
    this.root.$('#input-payment-lastname').setValue(data.lastName);
    this.root.$('#input-payment-email').setValue(data.email);
    this.root.$('#input-payment-telephone').setValue(data.telephone);
    // this.root.$('#input-payment-password').setValue(data.password);
    // this.root.$('#input-payment-confirm').setValue(data.password);
    this.root.$('#input-payment-company').setValue(data.company);

    this.root.$('#input-payment-address-1').setValue(data.address1);
    this.root.$('#input-payment-city').setValue(data.city);

    this.root.$('#input-payment-postcode').setValue(data.postCode);
    this.root.$('#input-payment-country').selectByVisibleText(data.country);
    this.root.$('#input-payment-zone').selectByVisibleText(data.region);
  }
}

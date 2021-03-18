export class AccountAndBillingDetailsComponent {
  private get root(): WebdriverIO.Element {
    return $('div#collapse-payment-address').parentElement();
  }

  acceptPrivacyPolicyCheckbox() {
    const checkbox = $('input[name="agree"]');
    expect(checkbox).toBeVisible({
      message: 'Accept Privacy Policy checkbox did not visible',
    });
    checkbox.click();
  }

  acceptNewsSellerCheckbox() {
    const newsCheckBox = $();
    expect(newsCheckBox).toBeVisible({
      message: 'news checkbox did not visible',
    });
    newsCheckBox.click();
  }

  continueButton() {
    const continueButton = this.root.$('input#button-register');
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
    this.root.$('#input-payment-password').setValue(data.password);
    this.root.$('#input-payment-confirm').setValue(data.password);
    this.root.$('#input-payment-company').setValue(data.company);

    this.root.$('#input-shipping-address-1').setValue(data.address1);
    this.root.$('#input-shipping-city').setValue(data.city);

    this.root.$('#input-shipping-postcode').setValue(data.postCode);
    this.root.$('#input-shipping-country').selectByVisibleText(data.country);
    this.root.$('#input-shipping-zone').selectByVisibleText(data.region);
  }
}

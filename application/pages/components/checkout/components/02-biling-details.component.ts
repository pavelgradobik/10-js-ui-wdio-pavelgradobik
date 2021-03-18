export class BillingDetailsComponentP{
    private get root(): WebdriverIO.Element {
        return $('div#collapse-payment-address').parentElement();
    }

    continueButtonClick() {
        const continueButton = this.root.$('input#button-payment-address');
        expect(continueButton).toBeVisible({message:'Continue button did not visible'});
        continueButton.click();
    }

    bilingExistedNewCheckbox(select: string){
        const selectAdressCheckbox = this.root.$(`input[value="${select}"]`);
        expect(selectAdressCheckbox).toBeVisible({message: 'Checkbox did not available'});
        selectAdressCheckbox.click();
    }

    fillInBillingdetails(data: IBilingDetails){

        this.root.$('#input-payment-firstname').setValue(data.firstName);
        this.root.$('#input-payment-lastname').setValue(data.lastName);
        this.root.$('#input-payment-company').setValue(data.company);
        this.root.$('#input-payment-telephone').setValue(data.telephone);
        this.root.$('#input-payment-address-1').setValue(data.address1);
        this.root.$('#input-payment-city').setValue(data.city);
        this.root.$('#input-payment-postcode').setValue(data.postCode);
        this.root.$('#input-payment-country').selectByVisibleText(data.country);
        this.root.$('#input-payment-zone').selectByVisibleText(data.region);

    }



}
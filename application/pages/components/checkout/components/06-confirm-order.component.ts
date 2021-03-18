export class ConfirmOrderComponent{
    private get root(): WebdriverIO.Element {
        return $('div#collapse-checkout-confirm').parentElement();
    }

    confirmButtonClick() {
        const confirmButton = this.root.$('input#button-confirm');
        expect(confirmButton).toBeVisible({message:'Confirm button did not visible'});
        confirmButton.click();
    }
}
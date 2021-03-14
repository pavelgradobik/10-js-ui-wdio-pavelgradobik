
export class ReturnPage {
    
    open(url: string){
        browser.url(url);
    }

    isOpened() :boolean {
        return $('#content h1').isDisplayed();
    }

    fillReturnForm(fillData: IProductReturn){

        $('#input-firstname').setValue(fillData.firstName);
        $('#input-lastname').setValue(fillData.lastName);
        $('#input-email').setValue(fillData.email);
        $('#input-telephone').setValue(fillData.telephone);
        $('#input-order-id').setValue(fillData.orderId);
        $('i.fa.fa-calendar').click();
        expect($('[class="day active today"]')).toBeDisplayed({message: 'Current date selector is not available'});
        $('[class="day active today"]').click();
        $("#input-product").setValue(fillData.productName);
        $("#input-model").setValue(fillData.productCode);
        $("#input-quantity").setValue(fillData.quantity);
        $(`[name="return_reason_id"][value="${fillData.returnReason}"]`).click();
        $("#input-comment").setValue(fillData.otherDetails);
       
    }

    submitReturnForm() {
        const submitButton = $('[value="Submit"]');
        expect(submitButton).toBeVisible({message: 'button is not visible on the ReturnPage'});
        submitButton.click();
    }
    
}
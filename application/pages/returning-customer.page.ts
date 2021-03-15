export class ReturnCustomerPage{

    get emailAdressInput(){
        return $('#input-email');
    }

    get passwordInput(){
        return $('#input-password');
    }

    get loginButton(){
        return $('[value="Login"]');
    }

    isOpen(): boolean{
        return this.loginButton.isDisplayed();
    }

    fillLoginFormAndLogin(logData: IReturnCustomer){

        this.emailAdressInput.setValue(logData.emailAdress);
        this.passwordInput.setValue(logData.password);
        this.loginButton.click();
    }
}
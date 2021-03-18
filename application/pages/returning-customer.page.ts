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

    openLoginPage(url: string){
        browser.url(url);
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
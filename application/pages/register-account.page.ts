import { RegisterAccountComponents } from "./components/register-account/components/register-account.component";

export class RegisterAccountPage {

    registerAccountComponents: RegisterAccountComponents;
    constructor(){
        this.registerAccountComponents = new RegisterAccountComponents();
    }
    
    open(url: string){
        browser.url(url);
    }

    isOpened(): boolean{
        return $('#account-register h1').isDisplayed();
    }

    fillRegistrationForm(data: IRegisterAccount){
        
        this.registerAccountComponents.firstNameInput.setValue(data.firstName);
        this.registerAccountComponents.lastNameInput.setValue(data.lastName);
        this.registerAccountComponents.emailInput.setValue(data.email);
        this.registerAccountComponents.telephoneInput.setValue(data.telephone);
        this.registerAccountComponents.passwordInput.setValue(data.password);
        this.registerAccountComponents.confirmPasswordInput.setValue(data.confirmPassword);

    }

    agreeWithPoliciesAndContinueRegistration(){
        
        this.registerAccountComponents.privacyPolicyCheckbox.isClickable();
        this.registerAccountComponents.privacyPolicyCheckbox.click();
        this.registerAccountComponents.continueButton.click();

    }

}
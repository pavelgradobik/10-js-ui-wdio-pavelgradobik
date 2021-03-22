import { App } from "../application/application";

export function userRegistration(uniqMail: string, uniqPass: string): void{
    const app = new App();

    app.customerRegistrationPage.open('/index.php?route=account/register');
    app.customerRegistrationPage.isOpened();
    app.customerRegistrationPage.fillRegistrationForm({
        firstName: Math.random().toString(36).substring(3),
        lastName: Math.random().toString(36).substring(3),
        email: uniqMail,
        telephone: `+${Math.random().toString().slice(2, 11)}`,
        password: uniqPass,
        confirmPassword: uniqPass
    });

    app.customerRegistrationPage.agreeWithPoliciesAndContinueRegistration();

}
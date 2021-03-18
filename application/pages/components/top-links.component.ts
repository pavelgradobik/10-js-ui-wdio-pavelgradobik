export class TopLinks {
    private get root(): WebdriverIO.Element {
        return $('nav#top')
    }

    get loginButton(){
        return $('a[href*="/login"]');
    }

    get shoppingCartLink(){        
       return this.root.$('[title="Shopping Cart"]'); 
    } 

    openCheckout() {
        const checkoutButton = this.root.$('a[title="Checkout"]') 
        expect(checkoutButton).toBeVisible({message: "checkout is able at the header"});
        checkoutButton.click();
    }

    openMyAcountOptions() {
        const myAccountButton = this.root.$('a[title="My Account"]')
        expect(myAccountButton).toBeVisible({message: "myAcc button is able at the header"});
        myAccountButton.click();
    }

    openLoginPage(){
        const loginButton = this.root.$('a[href*="/login"]')
        expect(loginButton).toBeVisible({message: "login button is able at the header"});
        loginButton.click();
    }

    openRegistrationPage(){
        const registerButton = this.root.$('a[href*="/register"]');
        expect(registerButton).toBeVisible({message: "register button is able at the header"});
        registerButton.click();
    }
}
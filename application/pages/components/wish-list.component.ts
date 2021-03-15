export class wishListComponents{
    constructor(private root: WebdriverIO.Element){

    }

    productTitle(): string{
        return this.root.$('a').getText();
    }

    
}
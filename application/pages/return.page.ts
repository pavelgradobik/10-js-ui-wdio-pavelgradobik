export class ReturnPage {
    constructor (private root: WebdriverIO.Element){}

    open(url: string){
        browser.url(url);
    }

    isOpened() :boolean {
        return $('#content h1').isDisplayed();
    }
}
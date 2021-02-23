describe(`website`, function() {

    it(`should be alive`, function() {
        
        browser.url(`/`);
        expect($('#logo')).toBeDisplayed();


    });
});
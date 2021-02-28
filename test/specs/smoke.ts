describe.skip(`website`, function() {

    it.skip(`should be alive`, function() {
        
        browser.url(`/`);
        expect($('#logo')).toBeDisplayed();


    });

    it(`should allow user to redister`, function () {
        browser.url('/index.php?route=account/register');
        browser.pause(10000);
        
        const content = $(`#content`);

        const firstName = content.$('#input-firstname');
        const lastName = content.$('#input-lastname');

        firstName.setValue('Test');
        lastName.setValue('Test');


    });
});
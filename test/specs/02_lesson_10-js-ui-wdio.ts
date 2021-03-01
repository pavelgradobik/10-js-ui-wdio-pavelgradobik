import * as crypto from 'crypto'

/**
 - Try to implement as much tests as you can
 - Do not overload tests with logic, be simple
 - browser.pause() allowed
 - copy/paste is allowed
 - prefer css selectors
 - don't forget about assertions
 */

// this test gives you 20 points
// http://93.126.97.71:10082/index.php?route=account/return/add
// Notice that datepicker is optional
describe.skip("Product return", function () {
  it.skip("can be submited", function () {

    //#region return page elements
    const firstNameInput = $('#input-firstname');
    const lastNameInput = $('#input-lastname');
    const emailInput = $('#input-email');
    const telephoneInput = $('#input-telephone');
    const orderIdInput = $('#input-order-id');
    const calendarCallButton = $('//input[@id="input-date-ordered"]/following-sibling::span');
    const todayDayCalendarButton = $('.day.active.today');
    const productNameInput = $('#input-product');
    const productCodeInput = $('#input-model');
    const productQuantityInput = $('#input-quantity');
    const returnReasonDEADCheckbox = $(`//input[@name="return_reason_id" and @value=1]`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    const productOpenedCheckbox = $('//input[@name="opened" and @value=1]')
    const returnCommentInput = $('#input-comment');
    const submitButton = $('[value="Submit"]');
    // const returnMessage = 'Product Returns';

    const productReturnsHeadMessage = $('//h1[text()="Product Returns"]');
    const productReturnTextMessage = $('//p[text()="Thank you for submitting your return request. Your request has been sent to the relevant department for processing."]');
    const continueButton =$('#content a[href*="home"]');
    
    //#region test
    browser.url("/index.php?route=account/return/add");
    browser.pause(500);

    firstNameInput.setValue(Math.random().toString(36).substring(3));
    lastNameInput.setValue(Math.random().toString(36).substring(3));
    emailInput.setValue(`${Math.random().toString(36).substring(3)}@mail.mail`);
    telephoneInput.setValue(`+${Math.random().toString().slice(2,11)}`);
    orderIdInput.setValue(`#${Math.random().toString().slice(2,7)}`);
    calendarCallButton.click();
    todayDayCalendarButton.click();
    productNameInput.setValue('text');
    productCodeInput.setValue('code');
    productQuantityInput.click();
    productQuantityInput.clearValue();
    productQuantityInput.setValue('12');
    returnReasonDEADCheckbox.click();
    productOpenedCheckbox.click();
    returnCommentInput.setValue(Math.random().toString(36).substring(3));
    submitButton.click();
    browser.pause(200);

    expect(productReturnsHeadMessage).toBeDisplayed();
    expect(productReturnTextMessage).toBeDisplayed();
    expect(continueButton).toBeDisplayed();
    //#endregion
  });
});

// http://93.126.97.71:10082/index.php?route=account/voucher
// this test gives you 20 points
describe("Gift Certificate", function () {
  it("can be purchased", function () {
    //#region voucher page elements
    const recipientsNameInput = $('#input-to-name');
    const recipientsEmailInput = $('#input-to-email');
    const yourNameInput = $('#input-from-name');
    const yourEmailInput = $('#input-from-email');
    const giftCertificateOptions = $('.radio');
    const birthdayRadiobutton = '[value="7"]';
    const cristmasRadiobutton = '[value="6"]';
    const generalRadiobutton = '[value="8"]';
    const messageInput = $('#input-message');
    const giftAmountInput = $('#input-amount');
    const acceptContiotionsCheckbox = $('[name="agree"]');
    const continueButton = $('[value="Continue"]');

    const successPurchaseTitleMessage = 'Purchase a Gift Certificate';
    const successPurchaseMessage = 'Thank you for purchasing a gift certificate! Once you have completed your order your gift certificate recipient will be sent an e-mail with details how to redeem their gift certificate.';

    //#endregion

    //#region test
    browser.url("/index.php?route=account/voucher");
    browser.pause(500);

    recipientsNameInput.setValue(Math.random().toString(36).substring(3));
    recipientsEmailInput.setValue(`${Math.random().toString(36).substring(3)}@mail.mail`);
    yourNameInput.setValue(Math.random().toString(36).substring(3));
    yourEmailInput.setValue(`${Math.random().toString(36).substring(3)}@mail.mail`);
    giftCertificateOptions.$(birthdayRadiobutton).click();
    messageInput.setValue(Math.random().toString(36).substring(3));
    giftAmountInput.clearValue();
    giftAmountInput.setValue('10');
    acceptContiotionsCheckbox.click();
    continueButton.click();
    browser.pause(200);

    expect($('#content h1').getText()).toEqual(successPurchaseTitleMessage);
    expect($('#content p').getText()).toEqual(successPurchaseMessage);
    //#endregion
  });   
});
                                                                                                                                                                                                                                         
// this test gives you 20 points
// http://93.126.97.71:10082/index.php?route=information/contact                                                                                                                                                                                                                                                                               
describe.skip("Contact us form", function () {
  it("must send messages to shop administration", function () {                                  
    throw new Error("NOT IMPLEMENTED");
  });
});

// Each implemented test gives you 20 points
describe.skip("Items search", function () {
  it("should show results in case multiple items matches", function () {
    throw new Error("NOT IMPLEMENTED");
  });

  it.skip("should redirect to 'no matching results' in case no items matched", function () {
    throw new Error("NOT IMPLEMENTED");
  });
});

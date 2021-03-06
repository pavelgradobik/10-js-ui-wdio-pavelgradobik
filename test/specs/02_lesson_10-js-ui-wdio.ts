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
describe("Product return", function () {
  const returnReason = new Map([
    ["Dead On Arrival", 1],
    ["Faulty, please supply detail", 4],
    ["Order Error", 3],
    ["Other, please supply details", 5],
    ["Received Wrong Item", 2],
  ]);

  returnReason.forEach(function (key, value) {
    it(`can be submited with reason ${value}`, function () {
      //#region return page elements
      const firstNameInput = $("#input-firstname");
      const lastNameInput = $("#input-lastname");
      const emailInput = $("#input-email");
      const telephoneInput = $("#input-telephone");
      const orderIdInput = $("#input-order-id");
      const calendarCallButton = $(
        '//input[@id="input-date-ordered"]/following-sibling::span'
      );
      const todayDayCalendarButton = $(".day.active.today");
      const productNameInput = $("#input-product");
      const productCodeInput = $("#input-model");
      const productQuantityInput = $("#input-quantity");
      const returnReasonDEADCheckbox = $(
        `//input[@name="return_reason_id" and @value=1]`
      );
      let returnReasonCheckbox = $(
        `//input[@name="return_reason_id" and @value=${key}]`
      );
      const productOpenedCheckbox = $('//input[@name="opened" and @value=1]');
      const returnCommentInput = $("#input-comment");
      const submitButton = $('[value="Submit"]');
      // const returnMessage = 'Product Returns';
      const productReturnsHeadMessage = $('//h1[text()="Product Returns"]');
      const productReturnTextMessage = $(
        '//p[text()="Thank you for submitting your return request. Your request has been sent to the relevant department for processing."]'
      );
      const continueButton = $('#content a[href*="home"]');
      //#endregion

      //#region test
      browser.url("/index.php?route=account/return/add");
      browser.pause(1000);

      firstNameInput.setValue(Math.random().toString(36).substring(3));
      lastNameInput.setValue(Math.random().toString(36).substring(3));
      emailInput.setValue(
        `${Math.random().toString(36).substring(3)}@mail.mail`
      );
      telephoneInput.setValue(`+${Math.random().toString().slice(2, 11)}`);
      orderIdInput.setValue(`#${Math.random().toString().slice(2, 7)}`);
      calendarCallButton.click();
      todayDayCalendarButton.click();
      productNameInput.setValue("text");
      productCodeInput.setValue("code");
      productQuantityInput.click();
      productQuantityInput.clearValue();
      productQuantityInput.setValue("12");
      returnReasonCheckbox.click();
      // returnReasonDEADCheckbox.click();
      productOpenedCheckbox.click();
      returnCommentInput.setValue(Math.random().toString(36).substring(3));
      submitButton.click();
      browser.pause(200);

      expect(productReturnsHeadMessage).toBeDisplayed();
      expect(productReturnTextMessage).toBeDisplayed();
      expect(continueButton).toBeDisplayed();
      expect(browser.getUrl()).toContain("/success");
    });
  });
  //#endregion
});

// http://93.126.97.71:10082/index.php?route=account/voucher
// this test gives you 20 points
describe("Gift Certificate", function () {
  
  const giftReason = new Map([
    ["Birthday", 7],
    ["Cristmas", 6],
    ["General", 8],
  ]);

  giftReason.forEach(function (key, value) {
    it(`can be purchased with gift Theme: ${value}`, function () {
      //#region voucher page elements
      const recipientsNameInput = $("#input-to-name");
      const recipientsEmailInput = $("#input-to-email");
      const yourNameInput = $("#input-from-name");
      const yourEmailInput = $("#input-from-email");
      const giftCertificateOptions = $(".radio");
      // const birthdayRadiobutton = '[value="7"]';
      // const cristmasRadiobutton = '[value="6"]';
      // const generalRadiobutton = '[value="8"]';
      let reasonRadioButton = $(`//input[@name="voucher_theme_id" and @value="${key}"]`);
      const messageInput = $("#input-message");
      const giftAmountInput = $("#input-amount");
      const acceptContiotionsCheckbox = $('[name="agree"]');
      const continueButton = $('[value="Continue"]');

      const successPurchaseTitleMessage = "Purchase a Gift Certificate";
      const successPurchaseMessage =
        "Thank you for purchasing a gift certificate! Once you have completed your order your gift certificate recipient will be sent an e-mail with details how to redeem their gift certificate.";

      //#endregion

      //#region test
      browser.url("/index.php?route=account/voucher");
      browser.pause(500);

      recipientsNameInput.setValue(Math.random().toString(36).substring(3));
      recipientsEmailInput.setValue(
        `${Math.random().toString(36).substring(3)}@mail.mail`
      );
      yourNameInput.setValue(Math.random().toString(36).substring(3));
      yourEmailInput.setValue(
        `${Math.random().toString(36).substring(3)}@mail.mail`
      );
      reasonRadioButton.click();
      messageInput.setValue(Math.random().toString(36).substring(3));
      giftAmountInput.clearValue();
      giftAmountInput.setValue("10");
      acceptContiotionsCheckbox.click();
      continueButton.click();
      browser.pause(200);

      expect($("#content h1").getText()).toEqual(successPurchaseTitleMessage);
      expect($("#content p").getText()).toEqual(successPurchaseMessage);
      expect(browser.getUrl()).toContain("/success");
      //#endregion
    });
  });
});

// this test gives you 20 points
// http://93.126.97.71:10082/index.php?route=information/contact
describe("Contact us form", function () {
  it("must send messages to shop administration", function () {
    //#region Contact Us page elements

    const yourNameInput = $("#input-name");
    const emailAdressInput = $("#input-email");
    const enquiryUnput = $("#input-enquiry");
    const contactFormTitle = $("legend");
    const submitButton = $('[value="Submit"]');
    const continueButton = $('a=Continue');

    //#endregion

    //#region test
    browser.url("/index.php?route=information/contact");
    browser.pause(500);

    yourNameInput.setValue(Math.random().toString(36).substring(3));
    emailAdressInput.setValue(
      `${Math.random().toString(36).substring(3)}@mail.mail`
    );
    enquiryUnput.setValue(Math.random().toString(36).substring(2));
    submitButton.click();
    browser.pause(400);

    expect(contactFormTitle).not.toBeDisplayed();
    expect(continueButton).toBeDisplayed();
    expect(browser.getUrl()).toContain("/success");
    //#endregion
  });
});

// Each implemented test gives you 20 points
describe("Items search", function () {
  it("should show results in case multiple items matches", function () {
    //#region MainSearch elems

    const searchInput = $('[placeholder="Search"]');
    const searchButton = $("#search button");
    const searchResult = $$("h4 a");

    //#endregion

    //#region test

    browser.url("/");
    searchInput.setValue("MacBook");
    searchButton.click();
    browser.pause(500);

    expect(searchResult).toHaveTextContaining("MacBook");

    //#endregion
  });

  it("should redirect to 'no matching results' in case no items matched", function () {
    //#region MainSearch elems

    const searchInput = $('[placeholder="Search"]');
    const searchButton = $("#search button");
    const searchFaultMessage = $("//h2/following-sibling::p");
    //#endregion

    //#region test

    browser.url("/");
    searchInput.setValue("sometext");
    searchButton.click();
    browser.pause(500);

    expect(searchFaultMessage.getText()).toEqual(
      "There is no product that matches the search criteria."
    );

    //#endregion
  });
});

import { App } from "../../application/application";
import { giftReason } from "../../testData/gift-certificate-reasons";
import { returnReason } from "../../testData/return-reason";

describe("Product return", function () {
  returnReason.map((elem) => {
    it(`can be submited with reason ${elem.returnName}`, function () {
      const app = new App();

      app.returnPage.open("/index.php?route=account/return/add");
      browser.waitUntil(() => app.returnPage.isOpened(), {
        timeoutMsg: "Expected return page is opened",
      });

      app.returnPage.fillReturnForm({
        firstName: Math.random().toString(36).substring(3),
        lastName: Math.random().toString(36).substring(3),
        email: `${Math.random().toString(36).substring(3)}@mail.mail`,
        telephone: `+${Math.random().toString().slice(2, 11)}`,
        orderId: `#${Math.random().toString().slice(2, 7)}`,
        productName: Math.random().toString(36).substring(3),
        productCode: Math.random().toString(36).substring(3),
        quantity: "10",
        returnReason: elem.elemNumber,
        otherDetails: Math.random().toString(36).substring(3),
      });

      app.returnPage.submitReturnForm();

      browser.waitUntil(() => app.returnConfirmation.isOpened(), {
        timeoutMsg: "Expected return page is opened",
      });
    });
  });
});

describe("Gift Certificate", function () {
  giftReason.map((reason) => {
    it(`can be purchased with gift Theme: ${reason.giftReason}`, function () {
      const app = new App();

      app.giftVoucherPage.open("/index.php?route=account/voucher");
      browser.waitUntil(() => app.giftVoucherPage.hasOpened(), {
        timeoutMsg: "Expected return page is opened",
      });

      app.giftVoucherPage.fillGiftVoucherForm({
        recipientsName: Math.random().toString(36).substring(3),
        recipientsEmail: `${Math.random().toString(36).substring(3)}@mail.mail`,
        yourName: Math.random().toString(36).substring(3),
        yourEmail: `${Math.random().toString(36).substring(3)}@mail.mail`,
        giftTheme: reason.elemValue,
        message: Math.random().toString(36).substring(3),
        amount: "10",
      });

      app.giftVoucherPage.acceptTermsAndContinue();

      browser.waitUntil(() => app.giftVoucherConfirmation.hasSend(), {
        timeoutMsg: "Expected return page is opened",
      });

      expect(app.giftVoucherConfirmation.getSuccessTitle()).toEqual(
        "Purchase a Gift Certificate"
      );
    });
  });
});

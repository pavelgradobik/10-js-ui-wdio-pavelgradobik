import { App } from "../../application/application";
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
        quantity: '10',
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

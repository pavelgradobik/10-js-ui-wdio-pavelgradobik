import { App } from '../../application/application';
import { userRegistration } from '../../application/utils/user-registration.helper';

describe('Product can be bought', function () {
  const newEmailAdress = `${Math.random().toString(36).substring(3)}@mail.mail`;
  const newPassword = Math.random().toString(36).substring(2);

  before(function () {
    userRegistration(newEmailAdress, newPassword);
  });

  beforeEach(function () {
    browser.deleteCookies();
  });

  it.skip('by a newly registered user', function () {
    const app = new App();

    app.loginPage.openLoginPage('/index.php?route=account/login');
    app.loginPage.fillLoginFormAndLogin({
      emailAdress: newEmailAdress,
      password: newPassword,
    });

    app.productMenu.mp3PlayersMenuButton.click();
    app.productMenu.openAllMp3PlayersList.click();

    browser.waitUntil(() => app.productCategoryPage.isOpen(), {
      timeoutMsg: 'Expected Products page is opened',
    });

    const iPodClassic = app.productCategoryPage.products.find(
      (player) => player.title() === 'iPod Classic'
    );
    iPodClassic.addToCart();
    app.productCategoryPage.topLinks.openCheckout();

    app.checkoutPage.billingDetails.fillInBillingdetails({
      firstName: Math.random().toString(36).substring(3),
      lastName: Math.random().toString(36).substring(3),
      company: Math.random().toString(36).substring(3),
      address1: Math.random().toString(36).substring(3),
      city: Math.random().toString(36).substring(3),
      postCode: Math.random().toString(36).substring(3),
      country: 'Ukraine',
      region: 'Kyiv',
    });

    app.checkoutPage.billingDetails.continueButtonClick();

    browser.pause(300); // can't find the solution for such small pause between menu openings;

    app.checkoutPage.deliveryDetails.selectExistingOrNewAdressCheckbox('new');
    app.checkoutPage.deliveryDetails.fillDeliveryAddress({
      firstName: Math.random().toString(36).substring(3),
      lastName: Math.random().toString(36).substring(3),
      company: Math.random().toString(36).substring(3),
      address1: Math.random().toString(36).substring(3),
      city: 'Kyiv',
      postCode: '04044',
      country: 'Ukraine',
      region: 'Kyiv',
    });
    app.checkoutPage.deliveryDetails.continueButton();

    browser.pause(300); // can't find the solution for such small pause between menu openings;

    // app.checkoutPage.deliveryMethod.commentForOrderInput(
    //   Math.random().toString(36).substring(3)
    // );
    app.checkoutPage.deliveryMethod.continueButton();

    app.checkoutPage.paymentMethod.termsAndConditionsCheckboxAgree();
    app.checkoutPage.paymentMethod.continueButton();

    app.checkoutPage.confirmOrder.confirmButtonClick();

    browser.waitUntil(() => app.checkoutPage.orderConfirmation.isOpened(), {
      timeoutMsg: 'Expected Products page is opened',
    });
  });

  it('by a guest', function () {
    const app = new App();
    app.homePage.open('/index.php?route=common/home');

    app.productMenu.mp3PlayersMenuButton.click();
    app.productMenu.openAllMp3PlayersList.click();

    browser.waitUntil(() => app.productCategoryPage.isOpen(), {
      timeoutMsg: 'Expected Products page is opened',
    });

    const iPodClassic = app.productCategoryPage.products.find(
      (player) => player.title() === 'iPod Classic'
    );
    iPodClassic.addToCart();
    app.productCategoryPage.topLinks.openCheckout();

    app.checkoutPage.checkoutOptions.newCustomerCheckOutoption('guest');
    app.checkoutPage.checkoutOptions.continue();

    app.checkoutPage.accountAndBillingDetails.fillAllAddresses({
      firstName: Math.random().toString(36).substring(3),
      lastName: Math.random().toString(36).substring(3),
      email: `${Math.random().toString(36).substring(3)}@mail.mail`,
      telephone: '+385656566565',
      company: Math.random().toString(36).substring(3),
      address1: Math.random().toString(36).substring(3),
      address2: Math.random().toString(36).substring(3),
      city: 'Kyiv',
      postCode: '04222',
      country: 'Ukraine',
      region: 'Kyiv'
    });

    app.checkoutPage.accountAndBillingDetails.deliveryEquialsBillingCheckbox();
    app.checkoutPage.accountAndBillingDetails.continueButton();

    app.checkoutPage.deliveryDetails.fillDeliveryAddress({
      firstName: Math.random().toString(36).substring(3),
      lastName: Math.random().toString(36).substring(3),
      company: Math.random().toString(36).substring(3),
      address1: Math.random().toString(36).substring(3),
      city: 'Kyiv',
      postCode: '04044',
      country: 'Ukraine',
      region: 'Kyiv',
    });
    app.checkoutPage.deliveryDetails.continueButtonGuest();

    browser.pause(300);

    app.checkoutPage.deliveryMethod.continueButton();

    app.checkoutPage.paymentMethod.termsAndConditionsCheckboxAgree();
    app.checkoutPage.paymentMethod.continueButton();

    app.checkoutPage.confirmOrder.confirmButtonClick();

    browser.waitUntil(() => app.checkoutPage.orderConfirmation.isOpened(), {
      timeoutMsg: 'Expected Products page is opened',
    });

  });
});

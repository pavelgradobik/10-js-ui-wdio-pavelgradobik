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

  it('by a newly registered user', function () {
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

    browser.pause(10000)


  });
});

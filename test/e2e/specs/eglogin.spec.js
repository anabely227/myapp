module.exports = {
  '@tags': ['Login'],

   //beforeEach: (browser) => browser.init(),

  'login test using page objects': (browser) => {
    var loginpage = browser.page.eglogin();

    loginpage.navigate();
    loginpage.expect.element('@inputUserName').to.be.present.after(2000);
    loginpage.assert.title('Log in to eventgrated-web dev')
    loginpage.signin('gloria.rodriguez@01da.de', 'Password123!')
    browser.pause(1000)
    loginpage.assert.urlContains('/settings/locations')
    browser.saveScreenshot('test/e2e/reports/Sign.png')
    browser.end();
  },

  'Forgot password link': (browser) => {
    var loginpage = browser.page.eglogin();

    loginpage.navigate();
    loginpage.expect.element('@inputUserName').to.be.present.after(2000);
    loginpage.assert.title('Log in to eventgrated-web dev')
    browser.saveScreenshot('test/e2e/reports/forgot.png')
    browser.end();
  },

 // Fix
 //afterEach: (browser) => {
 //   browser.end();
 // }
 
};
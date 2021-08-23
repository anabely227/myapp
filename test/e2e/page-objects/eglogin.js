const myLoginCommands = {
  signin: function (username, password) {
      return this.waitForElementVisible('@inputUserName',1000)
                .waitForElementVisible('@inputPassword',1000)
                .setValue('@inputUserName', username)
                .setValue('@inputPassword', password)
                .click('@submit')
                .waitForElementNotPresent('@submit',1000)
  },
}

module.exports = {
  url: 'https://develop-frontend-etgd.01da-dev.de/',
  commands: [myLoginCommands],
  elements:{
    inputUserName:{
      selector: 'input[type=text]'
    },
    inputPassword:{
      selector: 'input[type=password]'
    },
    submit: {
      selector: 'button[type=submit]'
    },
    forgotPassword: {
     selector: 'a[class="c533124ae c92fbc01d c464950c7"]'
    }
  },

afterEach: (browser) => {
   browser.end();
 }
};
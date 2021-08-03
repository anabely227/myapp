module.exports = {
  'formy keypress test': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    //const devServer = browser.globals.devServerURL
    //Example testing

    let formy = browser.page.formy()

    formy.navigate()
      .assert.title('Formy')
      .assert.visible('@inputName')
      .setValue('@inputName','nightwatch')
      .click('@submit')
  }
}
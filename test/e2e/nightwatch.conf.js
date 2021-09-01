require('babel-register')
var config = require('../../config')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  page_objects_path: ['test/e2e/page-objects'],
  custom_assertions_path: ['test/e2e/custom-assertions'],
  skip_testcases_on_fail: false,

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    silent: true,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        waitForConditionTimeout: 5000,
        devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port)
      },
      test_workers: {
        enabled: true,
        workers: 'auto'
      },
      
      screenshots: {
        enabled: true,
        path: "test/e2e/screenshots",
        on_failure: true,
        on_error: true
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ["--headless", "--no-sandbox", "--disable-gpu"],
          w3c: false,
        },
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        browserName: "firefox",
        "moz:firefoxOptions": {
          args: ["--headless"],
        },
      }
    },
  }
}


class App {
  constructor(browser) {
    this.browser = browser
  }

  login(userEmail = "foo@mail.com", password = "passwd", failOnLoginFailed = true, keepLogin = true) {
    this.browser.url('http://localhost:3000/login')

    this.browser.$("input[type=email]").setValue(userEmail)
    this.browser.$("input[type=password]").setValue(password)
    if (keepLogin) {
      this.browser.$("input[type=checkbox]").click()
    }
    this.browser.$(".submit").click()
    this.browser.$z(`#headerLogo${failOnLoginFailed ? "" : ",#loginFailedMessage"}`).waitForDisplayed(2000)
  }
}

describe('app test', () => {
  it('app test 1', () => {
    const app = new App(browser)
    app.login()

    browser.url('http://localhost:3000/edit-robo/677')
    // browser.$("[class^=collapseForeachStepCaption--]").click()
    // browser.$("[class^=stepDeleteWrap--]").click()
    browser.$('//div[text()="URLを開く" and starts-with(@class, "stepTitle--")]').isExisting()
  })
})

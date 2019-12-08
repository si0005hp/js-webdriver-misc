
describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('http://testhttpd/test/wdio/resources/sample.html')

    // browser.$("[class^=buttons--] .ok-button").click()
    // browser.$("[class^=ok-button]").click()
    browser.$("[class=root] .ok-button").click()
  })
})

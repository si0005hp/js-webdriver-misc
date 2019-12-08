const f = (i) => {
  console.log(`done ${i}!`)
}

describe('webdriver.io page', () => {
  it('test 1', () => {
    setTimeout(() => f(1), 1000)
    browser.pause(1000)
  })

  it('test 2', () => {
    setTimeout(() => f(2), 1000)
    browser.pause(1000)
  })

  it('test 3', () => {
    setTimeout(() => f(3), 1000)
    browser.pause(1000)
  })

  it('test 4', () => {
    setTimeout(() => f(4), 1000)
    browser.pause(1000)
  })

  it('test 5', () => {
    setTimeout(() => f(5), 3000)
    browser.pause(3500)
  }).timeout(10000);
})

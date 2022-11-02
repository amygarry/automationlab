const {Builder, Capabilities} = require('selenium-webdriver')
const { By } = require('selenium-webdriver')

require('chromedriver')
const {addMovie, crossOffMovie, unCross, deleteMovie} = require('./functions/moviefunctions')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll (async ()=>{
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll (async ()=>{
    await driver.quit()
})

test('add a movie', async()=>{
    await addMovie(driver) 
    await driver.sleep(1000)
})

test('cross a movie off', async ()=>{
    await crossOffMovie(driver)
    await driver.sleep(1000)
})

test('uncheck a movie', async()=>{
    await unCross(driver)
    await driver.sleep(1000)
})

test('delete a movie', async()=>{
    await deleteMovie(driver)
    await driver.sleep(2000)
})



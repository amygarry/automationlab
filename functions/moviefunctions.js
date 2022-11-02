const{By}= require('selenium-webdriver')

//put movie in there 
//test cross off 
//test put back 
//test delete 

const addMovie = async (driver)=>{
    
    await driver.findElement(By.xpath('//input')).sendKeys('Batman')
    // select the add button 
    await driver.findElement(By.xpath('//button')).click()
    //find the li element because we want to check if the movie title is added there. 
    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    //expect this to be true
    expect(displayed).toBeTruthy()

}

const crossOffMovie =async (driver)=>{
    const theElement = await driver.findElement(By.xpath('//span[text()="Batman"]'))
    await theElement.click()
    const theClass = await theElement.getAttribute('class')
    // console.log('hello there')
    // console.log(theClass)
    // console.log('goodbye now')
    expect(theClass).toBe("checked")
}

const unCross = async (driver)=>{
    const theElement = await driver.findElement(By.xpath('//span[@class="checked"]'))
    await theElement.click()
    const theClass = await theElement.getAttribute('class')
    console.log(theClass)
    expect(theClass).toBe("")
}


const deleteMovie = async (driver)=>{
    await driver.findElement(By.xpath('//button[@id="Batman"]')).click()
    
    const unorderedList = await driver.findElement(By.xpath('//ul'))
    
     const elementsofUl=  await unorderedList.getAttribute('elements')

        console.log(elementsofUl)
   
    expect(elementsofUl).toBe(null)
  
}

module.exports = {
    addMovie,
    crossOffMovie,
    unCross,
    deleteMovie,

}
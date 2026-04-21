import {test,expect} from "@playwright/test";
import path from "path";


test("Verify ui interaction ",async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Register.html",{waitUntil:"domcontentloaded"})
    await expect(page).toHaveTitle("Register")

    const firstName= page.getByPlaceholder("First Name")
    await firstName.fill("John")

    const lastName=page.getByPlaceholder("Last Name")
    await lastName.fill("Doe")

    const address=page.locator("textarea[ng-model='Adress']")
    await address.fill("123 Main St, Anytown, USA")

    const email=page.locator("input[type='email']")
    await email.fill("johndoe@gmail.com")

    const phone=page.locator("input[type='tel']")
    await phone.fill("1234567890")

    const radioButton=page.locator("input[type='radio'][value='Male']")
    await radioButton.check();
    await expect(radioButton).toBeChecked()

    const checkBox1=page.locator("#checkbox1")
    const checkBox2=page.locator("#checkbox3")

    if(!await checkBox1.isChecked())
    {
        await checkBox1.check();
        await expect(checkBox1).toBeChecked();
    }
    if(!await checkBox2.isChecked())
    {
        await checkBox2.check();
        await expect(checkBox2).toBeChecked();
    }

    const dropDown=page.locator("#Skills")
    await dropDown.selectOption({label:"Android"})
    await expect(dropDown).toHaveValue("Android")

    const countries=page.locator("#countries")
    await countries.selectOption({label:"Select Country"})

    const country=page.locator("#country")
    await country.selectOption({label:"India"})
    await expect(country).toHaveValue("India")

    const year=page.locator("#yearbox")
    const month=page.getByPlaceholder("Month")
    const day=page.locator("#daybox")

    await year.selectOption("1921")
    await month.selectOption({label:"April"})
    await day.selectOption({index:6})
    
    const file=page.locator("#imagesrc")
    //const filePath=path.resolve("tests/data/Android Intune_Migration Guide 80 18.pdf")
    const filePath=path.resolve(__dirname,"../data/Android Intune_Migration Guide 80 18.pdf")    
    await file.setInputFiles(filePath)
 
    const submitButton=page.locator("#submitbtn")
    await submitButton.click();
    //checkbox
    // const checkbox1=page.locator("#checkBoxOption1");
    // const checkbox2=page.locator("#checkBoxOption3");

    // if(!await checkbox1.isChecked())
    // {
    //     await checkbox1.check();
    //     await expect(checkbox1).toBeChecked();
    // }
    // if(!await checkbox2.isChecked())
    // {
    //     await checkbox2.check();
    //     await expect(checkbox2).toBeChecked();
    // }
    // const radioButton= page.locator("input[value='radio2']")
    // await radioButton.check();
    // await expect(radioButton).toBeChecked();

    // const dropDown=page.locator("#dropdown-class-example")
    // await dropDown.selectOption("option2")
    // await expect(dropDown).toHaveValue("option2")
})
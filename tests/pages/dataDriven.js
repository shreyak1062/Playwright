import path from 'path'
class PracticeFormPage
{
    constructor(page)
    {
        this.page=page;
        this.firstname=page.locator("#firstName")
        this.lastname=page.locator("#lastName")
        this.email=page.locator("#userEmail")
        this.genderMale=page.locator("#gender-radio-1")
        this.genderFemale=page.locator("#gender-radio-2")
        this.genderOther=page.locator("#gender-radio-3")
        this.number=page.locator("#userNumber")
        this.datePicker=page.locator("#dateOfBirthInput")
        this.subject=page.locator("#subjectsContainer input")
        this.sportsHobby=page.locator("#hobbies-checkbox-1")
        this.readingHobby=page.locator("#hobbies-checkbox-2")
        this.musicHobby=page.locator("#hobbies-checkbox-3")
        this.fileInput=page.locator("#uploadPicture")
        this.address=page.locator("#currentAddress")
       
        this.dropdownState = page.locator('#react-select-3-input');
        this.dropDownCity=page.locator("#react-select-4-input")
        this.submitButton=page.locator("#submit")

        // this.state=page.locator("#react-select-3-placeholder")
        // this.stateOptions=page.locator(".css-13cymwt-control");
        // this.cityOptions=page.locator("#react-select-4-input")
        // this.city=page.locator("#react-select-4-placeholder")

    }
    async fillFormData(data)
    {
        console.log("Data",data);
        await this.firstname.type(data.firstname)
        await this.page.keyboard.press("Backspace")   
        await this.page.keyboard.press("Tab")
        await this.lastname.type(data.lastname)
        await this.page.keyboard.press("Tab")
        await this.email.type(data.email)
        await this.page.keyboard.press("Tab")
        if(data.gender=="Male")
            await this.genderMale.check()
        if(data.gender=="Female")
            await this.genderFemale.check()
        if(data.gender=="Other")
            await this.genderOther.check()
        await this.number.type(data.mobileNumber)
        await this.page.keyboard.press("Tab")
        await this.datePicker.click();
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("Enter")
        await this.page.keyboard.press("Tab")
        await this.subject.type(data.subjects.subject1)
        await this.page.keyboard.press("ArrowDown")
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.press("Enter")
        await this.subject.type(data.subjects.subject2)
        await this.page.keyboard.press("ArrowDown")
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.press("Enter")
        await this.page.keyboard.press("Tab")
        if(data.hobbies.hobby1=="Reading")
            await this.readingHobby.check()
        if(data.hobbies.hobby2=="Music")
            await this.musicHobby.check()
        const filePath=path.resolve(__dirname,"../data/Android Intune_Migration Guide 80 18.pdf")
        await this.fileInput.setInputFiles(filePath)
       
        await this.address.type(data.currentAddress)
        //await this.dropdownState.click();
        await this.dropdownState.type(data.state);
        await this.page.waitForTimeout(2000)
        // Wait until options appear
        await this.page.waitForSelector('[id^="react-select-3-option"]');
        await this.page.locator('[id^="react-select-3-option-2"]').click()

        await this.dropDownCity.type(data.city)
        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector('[id^="react-select-4-option"]');
        await this.page.locator('[id^="react-select-4-option-1"]').click()

        await this.submitButton.click()

    }
    async fillExcelData(excelData)
    {
        console.log("Data",excelData);
        for(let data of excelData)
        {
        await this.firstname.type(data.firstname)
        await this.page.keyboard.press("Backspace")   
        await this.page.keyboard.press("Tab")
        await this.lastname.type(data.lastname)
        await this.page.keyboard.press("Tab")
        await this.email.type(data.email)
        await this.page.keyboard.press("Tab")
        if(data.gender=="Male")
            await this.genderMale.check()
        if(data.gender=="Female")
            await this.genderFemale.check()
        if(data.gender=="Other")
            await this.genderOther.check()
        await this.number.type(data.mobileNumber)
        await this.page.keyboard.press("Tab")
        await this.datePicker.click();
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("Enter")
        await this.page.keyboard.press("Tab")
        await this.subject.type(data.subject1)
        await this.page.keyboard.press("ArrowDown")
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.press("Enter")
        await this.subject.type(data.subject2)
        await this.page.keyboard.press("ArrowDown")
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.press("Enter")
        await this.page.keyboard.press("Tab")
        if(data.hobby1=="Reading")
            await this.readingHobby.check()
        if(data.hobby2=="Music")
            await this.musicHobby.check()
        const filePath=path.resolve(__dirname,"../data/Android Intune_Migration Guide 80 18.pdf")
        await this.fileInput.setInputFiles(filePath)
        //Screenshots
        await this.fileInput.screenshot({path:"screenshots/upload-fileInput.png"})
        await this.address.type(data.currentAddress)
        //await this.dropdownState.click();
        await this.dropdownState.type(data.state);
        await this.page.waitForTimeout(2000)
        // Wait until options appear
        await this.page.waitForSelector('[id^="react-select-3-option"]');
        await this.page.locator('[id^="react-select-3-option-2"]').click()

        await this.dropDownCity.type(data.city)
        await this.page.waitForTimeout(2000)

        await this.page.waitForSelector('[id^="react-select-4-option"]');
        await this.page.locator('[id^="react-select-4-option-1"]').click()

        await this.submitButton.click()
        }

    }
    
}
export default PracticeFormPage;
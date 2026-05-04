class MouseKeyboard
{
    constructor(page)
    {
        this.page=page;
        this.dlbClickButton=page.locator("#doubleClickBtn");
        this.dblClickResult=page.locator("#doubleClickMessage");
        this.rightClickButton=page.locator("#rightClickBtn");
        this.rightClickResult=page.locator("#rightClickMessage");
        this.dynamicClickButton=page.getByRole("button",{name:"Click Me",exact:true});
        this.dynamicClickResult=page.locator("#dynamicClickMessage");
        //Hover
        this.hoverButton=page.locator("#toolTipButton")
        //Drag and drop
        this.dragA=page.locator("#column-a")
        this.dropB=page.locator("#column-b")
        //Slider Keyboard events
        this.slider=page.locator("#slider")
        //Keyboard events
        this.firstname=page.locator("#firstName")
        this.lastname=page.locator("#lastName")
        this.email=page.locator("#userEmail")
        this.gender=page.locator("#gender-radio-2")
        this.number=page.locator("#userNumber")
        this.datePicker=page.locator("#dateOfBirthInput")
        this.subject=page.locator("#subjectsContainer input")
        this.readingHobby=page.locator("#hobbies-checkbox-2")
        this.musicHobby=page.locator("#hobbies-checkbox-3")
        this.fileInput=page.locator("#uploadPicture")
        this.address=page.locator("#currentAddress")
        //this.stateOptions=page.locator("#react-select-3-input")
        //this.stateOptions=page.locator(".css-1wy0on6");
        this.stateOptions=page.locator(".css-13cymwt-control");
        this.state=page.locator("#react-select-3-placeholder")
        this.cityOptions=page.locator("#react-select-4-input")
        this.city=page.locator("#react-select-4-placeholder")

        
    }
    async doubleClick()
    {
        await this.dlbClickButton.dblclick();
       
    }
    async rightClick()
    {
        await this.rightClickButton.click({button:"right"});
       
    }
    async dynamicClick()
    {
        await this.dynamicClickButton.click();
    }
    async buttonHover()
    {
        await this.hoverButton.hover();
    }
    async dragDrop()
    {
        //await this.page.dragAndDrop("#column-a","#column-b")
        //await this.dragA.dragTo(this.dropB) works as well
        await this.dragA.hover();
        await this.page.mouse.down();
        await this.dropB.hover();
        await this.page.mouse.up();

    }
    async resizable()
    {
        await this.page.mouse.move(400,500)
        await this.page.mouse.down()
        await this.page.mouse.move(600,700)
        await this.page.mouse.up()
    }
    async slide()
    { 
        await this.slider.focus();
        await this.page.keyboard.press("ArrowRight")
    }
    async keyActions()
    {
        await this.firstname.type("Shreyak")
        await this.page.keyboard.press("Backspace")   
        await this.page.keyboard.press("Tab")
        await this.lastname.type("Kunder")
        await this.page.keyboard.press("Tab")
        await this.email.type("shreya@gmail.com")
        await this.page.keyboard.press("Tab")
        await this.page.keyboard.press("ArrowRight")
        await this.page.keyboard.press("Tab")
        await this.number.type("9876543210")
        await this.page.keyboard.press("Tab")
        await this.datePicker.click();
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("Enter")
        await this.page.keyboard.press("Tab")
        await this.subject.type("Math")
        await this.page.keyboard.press("ArrowDown")
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.press("Enter")
        await this.subject.type("Physics")
        await this.page.keyboard.press("ArrowDown")
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.press("Enter")
        await this.page.keyboard.press("Tab")
        await this.page.keyboard.press("Tab")
        await this.readingHobby.check()
        await this.page.keyboard.press("Tab")
        await this.musicHobby.check()

    }
 
}
export default MouseKeyboard;
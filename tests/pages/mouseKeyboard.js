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
 
}
export default MouseKeyboard;
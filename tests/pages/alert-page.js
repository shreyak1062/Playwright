class Alert{
    constructor(page)
    {
        this.page=page;
        this.alertButton=page.getByRole("button", {name:"Click for JS Alert"});
        this.confirmButton=page.getByRole("button", {name:"Click for JS Confirm"});
        this.promptButton=page.getByRole("button", {name:"Click for JS Prompt"});
    }
    async homePage()
    {
        await this.page.goto("https://the-internet.herokuapp.com/javascript_alerts",{waitUntil:"domcontentloaded"})
    }
    async jsAlert()
    {
        await this.alertButton.click();
        await this.page.waitForTimeout(2000);
       
    }
    async jsConfirm()
    {
        await this.confirmButton.click();
    }
    async jsPrompt()
    {
        await this.promptButton.click();
    }

}
export default Alert;
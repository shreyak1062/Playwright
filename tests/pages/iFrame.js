import {expect} from "@playwright/test";
class IFrame{
    constructor(page){
        this.page=page;
        this.outerIframeLocator=page.frameLocator("#frame-outer")
        this.outerResult=this.outerIframeLocator.locator("#result")
        this.innerIframeLocator=this.outerIframeLocator.frameLocator("#frame-inner")
        this.innerResult=this.innerIframeLocator.locator("#result")
    }
    
    async gotoUrl()
    {
        await this.page.goto("http://uitestingplayground.com/frames");
    }
    async editButtonclick()
    {
        await this.outerIframeLocator.getByRole("button",{name:"Edit"}).click();
        await expect(this.outerResult).toHaveText("Button pressed: Edit");
    }
    async submitButtonClick()
    {
        await this.innerIframeLocator.getByRole("button",{name:"Submit"}).click();
        await expect(this.innerResult).toHaveText("Button pressed: Submit");
    }
}
export default IFrame;
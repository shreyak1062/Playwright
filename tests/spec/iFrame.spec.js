import {test,expect} from "@playwright/test";
import IFrame from "../pages/iFrame";
test("Handle iFrame",async({page})=>
{
   
    const iFrame=new IFrame(page);
    await page.goto("https://demoqa.com/buttons")
    await iFrame.editButtonclick();
  
    await page.waitForTimeout(2000);
    await iFrame.submitButtonClick();
    await page.waitForTimeout(2000);

})
// import {test,expect} from "@playwright/test";
// import Alert from "../pages/alert-page";

// test("Handle js alert",async({page})=>
// {
//   const alert=new Alert(page);
//   await alert.homePage();

//   page.once("dialog",async (dialog)=>
//   {
//     console.log(dialog.message());
//     await dialog.accept();
//   })
//   await alert.jsAlert();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
// })
// test("Handle confirm ",async({page})=>
// {
//   const alert=new Alert(page);
//   await alert.homePage();
//   page.once("dialog",async (dialog)=>
//   {
//     console.log(dialog.message());
//     await dialog.dismiss();
//   })
//   await alert.jsConfirm();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
// })

// test.only("Handle prompt ",async({page})=>
// {
//   const alert=new Alert(page);
//   await alert.homePage();

//   page.once("dialog",async (dialog)=>
//   {
//     console.log(dialog.message());
//     await dialog.accept("Hello js prompt");
//   })
//   await alert.jsPrompt();
//   await page.waitForTimeout(2000);
//   await expect(page.locator("#result")).toHaveText("You entered: Hello js prompt")
//   await page.screenshot({path:"screenshots/currentPage.png",fullPage:true})
  
// })

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
});
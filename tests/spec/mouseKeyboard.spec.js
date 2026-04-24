import {test,expect} from "@playwright/test";
import MouseKeyboard from "../pages/mouseKeyboard";
test("Mouse and Keyboard actions",async ({page})=>
{
    const mouseKeyboard=new MouseKeyboard(page);
    await page.goto("/buttons");
    await mouseKeyboard.doubleClick();
    await expect(mouseKeyboard.dblClickResult).toHaveText("You have done a double click");
    await mouseKeyboard.rightClick();
    await expect(mouseKeyboard.rightClickResult).toHaveText("You have done a right click");
    await mouseKeyboard.dynamicClick();
    await expect(mouseKeyboard.dynamicClickResult).toHaveText("You have done a dynamic click");
})
test("Hover",async({page})=>
{
    const mouseKeyboard=new MouseKeyboard(page);
    await page.goto("/tool-tips")
    //await mouseKeyboard.buttonHover()
   

await expect.poll(async () => {
  await mouseKeyboard.buttonHover();
  console.log("hoveredd");
  return await mouseKeyboard.hoverButton.getAttribute('aria-describedby');
   
}).toBeTruthy();
})

test("Drag and drop",async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop")
    const mouseKeyboard=new MouseKeyboard(page);
    await mouseKeyboard.dragDrop();
    await expect(mouseKeyboard.dropB).toHaveText("A")
    // await page.goto("https://demoqa.com/resizable")
    // await mouseKeyboard.resizable()
    await page.waitForTimeout(4000)
    

})
test.only("Slider",async ({page})=>
{
    await page.goto("/slider");
    const mouseKeyboard=new MouseKeyboard(page);
    const beforeSliderValue=Number(await page.inputValue("#sliderValue"))
    await mouseKeyboard.slide()
    //Assertion
    await expect.poll(async()=>
    {
        return Number(await page.inputValue("#sliderValue"))
    },
        {
            timeout:3000,
            intervals:[100,200,500]
        }
    ).toBe(beforeSliderValue+1)
    await page.waitForTimeout(2000)

})
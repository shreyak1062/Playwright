// @ts-check
import { test, expect } from '@playwright/test';

test('Verify user can open homepage successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Swag Labs");
});
test("Verify user can login with valid inputs",async({page})=>{
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder("Username").fill("standard_user")
  await page.locator("#password").fill("secret_sauce")
  await page.getByRole("button",{name:"Login"}).click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

  //getByAltText
  await page.getByAltText("Sauce Labs Backpack").click();
  //getByText
  await page.getByText("Add to cart",{exact:true}).click();

  await page.locator(".shopping_cart_link").click();

  
// const itemCount = await page.getByTestId('inventory-item').count();
// console.log('Cart item count:', itemCount)

const itemCount = await page.locator('.cart_item').count();
console.log('Cart item count:', itemCount)

await expect(page.locator('.cart_item')).toHaveCount(1);
 
  
})




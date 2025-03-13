import {Given, When,Then} from "@cucumber/cucumber"
import {chromium, Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";
import { Locators } from "../../locators/locators"; // Import the locators
import { TestEnv } from "../../config/testEnv"; // Import the configuration


    When('User move his cursor over the Women link', async function () {
        TestEnv.Wait
        await pageFixture.page.locator(Locators.womenMenu).hover();
    });

 
     When("User clicks sub-menu 'Blouses'", async function () {
        TestEnv.Wait
        await pageFixture.page.locator(Locators.blousesSubMenu).click();
    });

    When("User selects the Blouse product by clicking on the image", async function () {
       TestEnv.Wait
        await pageFixture.page.locator(Locators.productItem).click();
    });

    When("User selects color", async function () {
       TestEnv.Wait
       await pageFixture.page.locator(Locators.colorOption).click();
    });

    When("User clicks 'Add to Cart' button", async function () {
        TestEnv.Wait
        await pageFixture.page.locator(Locators.addToCartButton).click();
    });

    Then("A popup appears with message 'Product successfully added to your shopping cart'", { timeout: 15000 }, async function () {
        await expect(pageFixture.page.locator(Locators.productSuccessMessage)).toBeVisible({ timeout: 10000 });
        console.log(" Product added to cart successfully!");
        await pageFixture.page.locator(Locators.closeButton).click();
        console.log(" Closed success message popup.");

    });
   
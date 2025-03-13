import {Given, When,Then} from "@cucumber/cucumber"
import {chromium, Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";
import { Locators } from "../../locators/locators"; // Import the locators
import { TestEnv } from "../../config/testEnv"; // Import the configuration

When('User logs in with valid credentials', async function () {
    await pageFixture.page.locator(Locators.emailField).fill("testDemo@gmail.com");
    await pageFixture.page.locator(Locators.passwordField).fill("12345678");
    await pageFixture.page.locator(Locators.submitLoginButton).click();
});

When('User navigates to {string} section', async function (section: string) {
    await pageFixture.page.locator(Locators.myPersonalInfo).click();
});

When('User updates personal information with the following details:', async function (dataTable) {
    const data = dataTable.raw(); // Get data as an array
    // Extract values from the table
    const firstName = data[1][0];  
    const lastName = data[1][1];   
    const password = data[1][2];   
    TestEnv.Wait;
    await pageFixture.page.fill(Locators.UpdatedfirstNameField, firstName);
    await pageFixture.page.fill(Locators.UpdatedlastNameField, lastName);
    await pageFixture.page.fill(Locators.currentPasswordField, password);
});

When('User clicks "Save" button', async function () {
    TestEnv.Wait
    await pageFixture.page.locator(Locators.saveButton).click();
});

Then('A success message should be displayed', async function () {
    TestEnv.Wait
    await expect(pageFixture.page.locator(Locators.UpdatedsuccessMessage)).toBeVisible();
});


 /*
  When('User navigates to "My Personal Information" section', async function () {
    TestEnv.Wait;
    await pageFixture.page.locator(Locators.myPersonalInfo).click();
  });

  When('User updates personal information with the following details',async (dataTable) => {
    const data = dataTable.raw(); // Get data as an array
    // Extract values from the table
    const firstName = data[1][0];  
    const lastName = data[1][1];   
    const password = data[1][2];   
    TestEnv.Wait;
    await pageFixture.page.fill(Locators.UpdatedfirstNameField, firstName);
    await pageFixture.page.fill(Locators.UpdatedlastNameField, lastName);
    await pageFixture.page.fill(Locators.currentPasswordField, password);
  });

  When('User clicks "Save" button', async function () {
    TestEnv.Wait;
    await pageFixture.page.locator(Locators.saveButton).click();
  });

  Then('A success message should be displayed', async function () {
    TestEnv.Wait;
    await expect(pageFixture.page.locator(Locators.UpdatedsuccessMessage)).toBeVisible();

  });*/
 
     
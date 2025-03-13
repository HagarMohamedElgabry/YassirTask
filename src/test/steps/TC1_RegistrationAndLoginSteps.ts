import {Given, When,Then} from "@cucumber/cucumber"
import {chromium, Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";
import { Locators } from "../../locators/locators"; // Import the locators
import { TestEnv } from "../../config/testEnv"; // Import the configuration

let randomEmail: string;

      /**  Background */
 
  Given('User navigates to the application',{ timeout: 60000 }, async function () {
    await pageFixture.page.goto(TestEnv.URL);
  });
  
  Given('User opens Login page', async function () {
    TestEnv.Wait;
    await pageFixture.page.locator(Locators.loginButton).click();

  });
          /**  User Registration */
  When('User enters an email address in the "Create an Account section"', async function () {
    randomEmail = "testuser" + Date.now() + "@example.com"
    TestEnv.Wait;
    await pageFixture.page.fill(Locators.emailCreateField, randomEmail);

    
  });
  When('User clicks on the "Create an Account" button', async function () {
    TestEnv.Wait;
    await pageFixture.page.locator(Locators.submitCreateButton).click();
  });

  When("User fills in Personal Information:", async (dataTable) => {
    const data = dataTable.raw(); // Get data as an array
    // Extract values from the table
    const firstName = data[1][0];  // "Test"
    const lastName = data[1][1];   // "User"
    const password = data[1][2];   // "123456789"
    TestEnv.Wait;
    await pageFixture.page.fill(Locators.firstNameField, firstName);
    await pageFixture.page.fill(Locators.lastNameField, lastName);
    await pageFixture.page.fill(Locators.passwordCreateField, password);

  });
  When('User clicks on "Register" button', async () => {
    TestEnv.Wait;
    await pageFixture.page.locator(Locators.registerButton).click();
  });
   
  Then("User should be registered successfully", async () => {
    TestEnv.Wait;
    await expect(pageFixture.page.locator(Locators.successMessage)).toBeVisible();
    await pageFixture.page.locator(Locators.logoutButton).click();


  });
    /** Login */


  Given('User enters vaild email and password', async function () {
    TestEnv.Wait;
    await pageFixture.page.locator(Locators.emailField).fill(randomEmail)
    await pageFixture.page.locator(Locators.passwordField).fill("123456789")
  });

  When('User clicks on the login button', async function () {
    TestEnv.Wait;
    await pageFixture.page.click(Locators.submitLoginButton);

  });
  Then('User loggedin sucessfully', async function () {
    TestEnv.Wait;
    await expect(pageFixture.page.locator(Locators.logoutButton)).toBeVisible();

  });



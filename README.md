**Playwright (TS binding) + Cucumber (BDD)**
Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format.


**Get Started**
Setup:
1. Clone or download the project
2. Extract and open in the VS-Code
3. npm i to install the dependencies
4. npx playwright install to install the browsers
5. npm run test to execute the tests
6. To run a particular test change
  paths: [
            "src/test/features/featurename.feature"
         ] 
Use npm run test 

**Folder structure:**
  ├── /src
  │   ├── /test
  │   │   ├── /steps
  │   │   │   ├── TC1_RegistrationAndLoginSteps.ts  
              ├── TC2_EditUserInformationSteps.ts  
              ├── TC3_BuyProductSteps.ts 
  │   │   ├── /features
  │   │   │   ├── buyProduct.feature 
              ├── editUserInformation.feature 
              ├── registrationAndLogin.feature 
  │   │   ├── /hooks
              ├── pageFixture.ts
              ├── hooks.ts
  │   │   ├── /locators
              ├── locotor.ts
  │   │   ├── /helper
              ├── report.ts
  │  │   ├── /config
              ├── env.ts             


![image](https://github.com/user-attachments/assets/a06def0c-e6b1-4c25-a6ae-3765a999de25)

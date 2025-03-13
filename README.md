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

**Folder structure:**<br/>


- src\test\features -> write your features here<br/>
- src\test\steps -> Your step definitions goes here<br/>
- src\hooks\hooks.ts -> Browser setup and teardown logic<br/>
- src\hooks\pageFixture.ts -> Simple way to share the page objects to steps<br/>
- src\locators -> All locators used in the task<br/>
- src\config -> Environment and Configuration are handled<br/>
- src\helper\report -> To generate the report<br/>
- cucumber.json -> One file to do all the configuration related to cucumber<br/>
- package.json -> Contains all the dependencies<br/>
![image](https://github.com/user-attachments/assets/cbf7de3e-b652-498d-9d61-6316a8fa74de)
      

**Test Result Report:**
![image](https://github.com/user-attachments/assets/a06def0c-e6b1-4c25-a6ae-3765a999de25)

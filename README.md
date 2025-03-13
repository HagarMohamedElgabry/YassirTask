Playwright (TS binding) + Cucumber (BDD)
Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format.


Get Started
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

Folder structure
src\test\features -> write your features here
src\test\steps -> Your step definitions goes here
src\hooks\hooks.ts -> Browser setup and teardown logic
src\hooks\pageFixture.ts -> Simple way to share the page objects to steps
src\locators -> All locators used in the task
src\config -> Multiple environment and Configuration are handled
src\helper\report -> To generate the report
cucumber.json -> One file to do all the configuration related to cucumber
package.json -> Contains all the dependencies


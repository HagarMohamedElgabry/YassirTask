Feature: Automate the User Registration and Login process

  Background:
    Given User navigates to the application
    And User opens Login page

  Scenario: Verify user registration with valid details

    When User enters an email address in the "Create an Account section"
    And User clicks on the "Create an Account" button
    And User fills in Personal Information:
      | First Name | Last Name | Password|
      | Test       | User      | 123456789|

    And User clicks on "Register" button
    Then User should be registered successfully


  Scenario: Verify the login with vaild credentials
   
    And User enters vaild email and password
    When User clicks on the login button
    Then User loggedin sucessfully

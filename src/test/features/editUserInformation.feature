Feature: Update Personal Information

  Background:
    Given User navigates to the application
    And User opens Login page

  Scenario: Verify that a user can update their personal information
    When User logs in with valid credentials
    And User navigates to "My Personal Information" section
    And User updates personal information with the following details:
      | First Name | Last Name | Current Password |
      | <First Name> | <Last Name> | <Current Password> |
    And User clicks "Save" button
    Then A success message should be displayed

  Examples:
    | First Name | Last Name | Current Password |
    | Hagar      | Test      | 12345678        |

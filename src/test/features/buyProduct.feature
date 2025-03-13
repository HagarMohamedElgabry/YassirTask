Feature: Automate the end-to-end "Buy Product" feature process

  Background:
    Given User navigates to the application

   Scenario: Verify that users can successfully add products to their cart
    When User move his cursor over the Women link
    And User clicks sub-menu 'Blouses'
    And User selects the Blouse product by clicking on the image
    And User selects color
    And User clicks 'Add to Cart' button
    Then A popup appears with message 'Product successfully added to your shopping cart'

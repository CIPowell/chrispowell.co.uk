Feature: Not Found Error Page

    The Error Page that appears when a page is not found

    Scenario: 404 when accessing a non-existent page
        When I visit '/page-that-does-not-exist'
        Then I should get a 404 status code
            And the first "h2" element should contain "This isn't the page you're looking for..."
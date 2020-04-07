Feature: The Homepage
    The front page of the website

    Scenario: The Title should be correct
        When I am on the Homepage
        Then the first "h1" element should contain "Chris I Powell"
        
    Scenario: Sub titile
        When I am on the Homepage
        Then the first "h2" element should contain "Engineering Leader and Polyglot Developer"

    Scenario Outline: Navigation
        Given I am on the Homepage
        When I click on the link with the text "<linktext>"
        Then I should go to a page with the title "<title>"
            And I should go to a page with the url "<url>"

        Examples:
        | linktext    | title             | url     |
        | About       | Manager Readme    | /about  |
        | Blog        | Blog              | /blog   |
        | CV          | CV                | /cv     |
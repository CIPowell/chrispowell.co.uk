Feature: The Homepage
    The front page of the webstire

    Scenario: There should be one and only one H1 tag 
        When I am on the Homepage
        Then there should be 1 "h1" element
            And the first "h1" element should contain "Chris I Powell"
        
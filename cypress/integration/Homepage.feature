Feature: The Homepage
    The front page of the website

    Scenario: The Title should be correct
        When I am on the Homepage
        Then the first "h1" element should contain "Chris I Powell"
        
    Scenario: Sub titile
        When I am on the Homepage
        Then the first "h2" element should contain "Engineering Leader and Polyglot Developer"
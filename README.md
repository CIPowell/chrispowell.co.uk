# Chris I Powell - the tiny website project [![Build Status](https://travis-ci.org/CIPowell/chrispowell.co.uk.svg?branch=master)](https://travis-ci.org/CIPowell/chrispowell.co.uk)

While looking at Angular 2 and React, it quickly struck me how big and nebulous
some of these frameworks are getting. Looking at the initial loads of Angular 2
(creates using angular-cli) and React (using create-react-app), there were
significant overheads for using these frameworks (2.5MB and 700ish KB each).

While these are unminified, it still struck me that with all our modern tooling
and myriad JS frameworks, high-speed connections and high-spec computers,
browsers that have all the new shiny stuff... we've allowed ourselves to get
wasteful. In building the new site, I've decided that I want to leverages these
techs to produce a beautiful, simple, efficient website.

My idea is for this to serve as a portfolio, a playground, a braindump and a
soapbox. Helping me improve my skills and understanding and letting me share
what I've learned.

## Brunch.... mmm... tasty
I decided I needed a build too, and Webpack looks interesting. But one of the
things I always liked about Grunt was the ability split up the tasks into folders...
once you'd used the appropriate extensions. So I chose Brunch over Webpack, as
Brunch feels more like an evolution of Grunt/Gulp and Webpack seems more suited
to Angular 2.  

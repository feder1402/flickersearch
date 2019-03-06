# flickersearch
[![Known Vulnerabilities](https://snyk.io/test/github/storybooks/storybook/badge.svg)](https://snyk.io/test/github/storybooks/storybook)

[![BCH compliance](https://bettercodehub.com/edge/badge/feder1402/flickersearch?branch=master)](https://bettercodehub.com/)

[![CodeFactor](https://www.codefactor.io/repository/github/signalr/signalr/badge?style=plastic)](https://www.codefactor.io/repository/github/signalr/signalr)
----------------------------------------------------------------------

This rerpository is an experiment, implementing a relatively simple scenario--searching photos in Flickr--using React but with different approaches. The goal of this exercise is to compare and contrast the different implementations in terms of simplicity and quality of the code. Creating 'normal' or vanilla implementation allows us to have a baseline against which to compare implementations using newer approaches.

See the Use Case section for the application requirements.

## Projects
Right now there are two complete and two in progress implementations; each one inside its own project forlder.

The two first projects are 'traditional' implementations using classes and hooks. The other two use actors and statecharts. Once the experimental ones are completed, we can compare them against the traditiuonal ones used as baselines and determine the cost benefit of the new mechanisms.

* flickr-search-classes: done, uses React with classes
* flickr-search-hooks: done, uses the new React hooks
* flickr-search-reaction: experimental, still in progress - uses Actors and Statecharts
* flickr-search-statemachine: experimental, still in progress - uses Statecharts

## To run any one of the projects:

Clone the repository:
```js
git clone https://github.com/feder1402/flickersearch.git
cd flickersearch
```

Go into the project folder you want to run
```js
cd ./flickr-search-classes
npm install
npm start
```
Open your browser and visit http://localhost:3000/

## Use Case
All the projects implement the same requirements specified here.

1. When the user visits the FlickrSearch page, the system shows:
   1. an empty input box to enter a tag (focused)
   2. a search button to submit the query (disabled)
2. As the user enters the tag in the search box, if the tag is
   1. empty 
      1. the input box shows a 'Enter your tag’ placeholder
	   2. the search button is disabled
   2. is not empty and
      1. is Valid: it contains only letters a-zA-Z
         1. the input box shows the tag entered so far
         2. the search box is enabled
      2. is Invalid: contains one or more non-letter characters
	     1. the input box has a red border and an error message shows saying: ‘Queries can have just letters'
	     2.	the search box is disabled
	3. When the user clicks the search button, or press Enter, if the search button is enabled:
	   1. The systems fires the search call to Flick, passing the tag
	   2. The system clears the input text and any old images while loading new ones
	   3. The search box input and button are disabled while the search call is in progress
	   4. The system shows a ‘Loading…’ message while loading
	4. When the search call returns
	   1. The search box input and button are re-enabled once the search call completes regardless if it succeeded or failed
	   2. If the search call succeeds, the system renders the collection of photos 
	5. If the search call fails, the system shows an error message 'Oops! Could not get your photos.'
	   1. If the user enters any value on the search box, the error message disappears

### Extensions:
* Implement timeouts for the API call. Show ‘request timed-out’ as the error in case of timeouts
* Allow user to cancel a pending request. Show ‘request canceled’ as the error if the user cancels
* Create a github project search app that uses the tag to find GitHub projects
  - Reuse as much as possible of FlickrSearch
  - implement only functionality that is different but avoid implementing features or behaviors that already exist


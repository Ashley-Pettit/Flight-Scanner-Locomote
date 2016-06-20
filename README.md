#Flight-Scanner (Locomote)

####ABOUT

At the bottom there are the requirements of this coding challenge.

####HOW TO RUN

1. Download this repo by clicking the download as zip button
2. Unzip the file
4. Ensure you have at least v2.2.2 of ruby installed. You can check by running ruby -v in your terminal/console. Ruby can be downloaded at https://www.ruby-lang.org/en/downloads/
5. With ruby installed navigate to the downloaded unzipped file with your terminal.
6. Run 'bundle install' to install dependancies.
7. Once in the folder type 'rails s' and the api will run
8. You can now open the front-end. Simply open 'index.html' with any browser

####ASSUMPTIONS

1. It is assumed that the API does not need authentication as there is no ability to delete flights, airlines etc. It may be desired to protect unauthorised use of the api however, this was deemed 'out of scope'


####FOCUS ON SOLID DESIGN PRINCIPALS

Where possible this solution attempts to demonstrate

- Small isolated functions and classes with single responsibility
- Ruby best practices around coding structure
- DRY code with minimal repetition.
- Good user experience
- Scalable design using as little hard coding as possible
- Clear object names for ease of maintenance/upgrade
- Basic security through things such as whitelisting params
- Version control to allow an API dependancies to continue working if the API is upgraded

Main tools used for this project are:

Ruby, Rails, Rspec, JavaScript, JQuery, AJAX,

I haven't used CoffeeScript as I haven't yet learnt it however, I don't think it would take me long

#### TASK REQUIREMENTS

JS code task

````
#Front end (part 1)

You are building a flight search interface.

Create a search form with three fields:

- From location (eg: Sydney)
- To location (eg: Heathrow)
- Travel date (eg: 2016-09-02)
- When the user clicks search, your front end code needs to make an AJAX request to a small backend server you will build, which will in turn contact the Flight API.

````

####Usability

Flights may be cheaper on some days than others;

If the user picks 2016-09-10 as their travel date, then query their chosen date and nearby dates (+/- 2):
2016-09-08, 2016-09-09, 2016-09-10, 2016-09-11, 2016-09-12

Hint - A great way to present all five days of results would be by using tabs.

You don't need to present all information returned by the flight search. Show what you think is relevant to the user.

```
Important

- Don't use any frameworks like React, Angular or similar.
You may however use utility libraries like jQuery, lodash & moment.js.

We use coffeescript, however you can also use plain javascript or typescript.
```

####Back end (part 2)

Build a back end server which has three endpoints:

- /airlines
Lists all available airlines from the Flight API.

- /airports
Lists all matching airports from the Flight API.

- /search
Accepts all parameters from the search form above.

For a single flight search, you will need to make multiple Flight API requests:
/airlines to get a list of airlines

/flight_search/:airline_code to search for flights for each airline
The list of airlines may change, so caching is not an option.

```
#Important
Stick to small frameworks like expressjs, koa, sinatra, flask, goji or similar.
We use node.js, however you're free to use ruby, python, golang, or similar.
```

#Flight API (provided)

Please use our Flight API to complete this task.

It has three endpoints:

/airlines
Provides a list of airlines. Takes no parameters.
The airline codes from the response is required for the flight search.
Example request: airlines

/airports
Provides an airport search.

Query parameters:
q - text based search param

The airportCode from the response is required for the flight search.
Example request: airports?q=Melbourne


flight_search/:airline_code
Provides a list of airlines.

URL parameters:
airline_code - airline code from the airlines endpoint

Query parameters:
date departure date, YYYY-MM-DD
from origin airport code, eg: SYD
to destination airport code, eg: JFK

Example request: flight_search/QF?date=2016-09-02&from=SYD&to=JFK

Expectations

Documentation is not necessary; try to write self documenting code & document only where required.
Submission

Please send us a link to your solution on github, bitbucket or similar. We will also accept a zip/gz/etc of your source code.

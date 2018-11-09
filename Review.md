# Review Questions

## What is Node.js?

Node.JS is a platform that allows us to write Javscript not just on the front end but also on the back end. It runs on the Chrome V8 engine and is a means of employing Javascipt outside of the browser.

## What is Express?

Express is a light-weight framework for NodeJS. It simplifies work with a NodeJS server and is very unopinionated, that is to say it does not have a lot of built in functionality and relies on a bit of middleware, whether third party or custom. It's API makes working with Node a breeze and has powerful routing capabilities.

## Mention two parts of Express that you learned about this week.

My favorite feature is the ROUTING for handling our, well, routes on the server. Middleware is the other big one we tackled this week- sort of like a middle man between your methods and the information that gets either sent or received, but more often the former, example: formatting a request in JSON to the server.

## What is Middleware?

As stated above, Middleware acts as an in-between with much of what's exchanged between the client and the server. Middleware is often used for custom handling of errors or parsing data in a particular way. In my previous experience with NodeJS, Body Parser was a middleware used to extact strings to and from requests and responses but, as Express is very light, it was an dependency. The .json method provides a very similar functionality and is a middleware we used quite a bit over the last 4 days.

## What is a Resource?

The saying goes, "Everything in REST is a resource." What this means is all of the endpoints of RESTful routes point to a resource, or a payload of sorts. The end point of, say, /posts would point to the resource that is a list of posts on an API. These resources are usually in the form of JSON.

## What can the API return to help clients know if a request was successful?

The HTTP code of 200 is returned to indicate success.

## How can we partition our application into sub-applications?

Using routes in Express will allow us to split our application into individual pieces, much like component directories in React. Using the .use method, we pass two arguments: the URL (/posts) and the router file (postRouter.js), wherein we specify all of the routes and requirements that particular part of the application would need. In the example of posts, the router file would indicate all of the API end points for different methods, such as GET or POST on the posts data.

## What is express.json() and why do we need it?

Express.json is how we transpile requests or responses to / from the server into JSON format, as Express typically works with JSON almost exclusively.

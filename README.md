# Adding Mongoose and new features.
Use Mongoose to access your local database.
Functionality shouldn't change, but now we're using Mongoose. Checkout the transition video recording for this week. 10 points.

Define a schema for a todo item.
Define the schema in a separate file and import it into your server file. There are some great examples of this in your book. There is only one field so make it required, indexed and unique. 10 points.

Read all todo items from the database and send them to the client when a GET request lands on '/list'.
This is similar to handling the POST request from last week, but this time we're also looking for a particular path requested and we're returning database data instead of static documents. 10 points

Display the data returned from GET requesting '/list' onto the webpage.
Use jQuery to make the GET request to '/list' and check out the video for how to create the list with Javascript. 10 points.



Hi Nick, Thank you for submitting with a GitHub link, it really does help me. 
You were near perfect in this submission. 
The only big issue really is the malformed payload and then having to parse that on the server side. 
Be sure to double check the instructions and ask me if you wish to do otherwise, 
I did say this was supposed to be a separate project from the cat blog in the instructions (no points off) 
and that the http server was to be moved into the database connection callback. Jason 

Front-end ------------------------- 
- You have a form with an input box and save button. +4 points 
- Your jQuery post function works because of the string bashing on the server side, but your payload is malformed. 
I've attached a screenshot to show it's not a JSON object. +3 points. 

- You have the bootstrap rows, columns, and container +2 points. 9/10 points. 

Back-end ------------------------- 
- Your http server is not located inside the database connection callback. 
However, you do have a working webserver and database connection however, so I'm only taking one point off. +4 points. 
- Your database connection is setup and works perfectly. +5 points. 
- Serving static files works as expected. +10 points. 
- Saving to the database works, but you're doing a lot of string parsing. 
I'm not taking any points off because I think it's just an attempt at handling the malformed payload. +10 points. 29/30 points



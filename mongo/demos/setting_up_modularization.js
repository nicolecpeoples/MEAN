server.js
Always start with your server.js file
The server.js file acts as the home base for your application. This is where you require the routes and the mongoose configurations
The server.js also creates the express application, loads configurations onto it, and then tells it to listen!
server/config/routes.js
This is the file that specifies which routes will be handled and by which controller methods.
From routes.js we require the controller file (or files).
server/controllers/quotes.js
This is the file that handles all of the server-side logic. The controller is called upon by the routes.
The controller interacts with preloaded models to run database commands.
The controller send the response to the client.
There can be many controllers in the server/controllers folder.
server/config/mongoose.js
This is the file that connects to the database and loads all of the models.
Here we specify a database to connect to and the path where all of our models are.
This file is required by server.js.
server/models/quote.js
This is the file that specifies the schema to be loaded by mongoose.
This file is required by mongoose.js.
We do not need to require this file in the controller, instead the model itself is loaded from mongoose.
There can be many models in the server/models folder.
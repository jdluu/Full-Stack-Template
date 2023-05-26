// Import required modules
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Create an instance of Express
const app = express();

// Define server port
const port = 3001;

// Use express.json() middleware to parse incoming request body as JSON
app.use(express.json());

// Define a route handler for the root URL
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

// Connect to MongoDB using the MONGODB_URI environment variable
mongoose.connect(
	process.env.MONGODB_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("Connected to MongoDB");
		}
	}
);

// Start the server and listen for incoming requests
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

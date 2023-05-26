// Import required modules
const express = require("express");
// Create an instance of Express
const app = express();
// Define server port
const port = 3000;
// Use express.json() middleware to parse incoming request body as JSON
app.use(express.json());

// Define a route handler for the root URL
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

// Start the server and listen for incoming requests
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

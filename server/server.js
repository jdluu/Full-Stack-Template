const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const port = 3001;
app.use(express.json());

// Connect to MongoDB using the MONGODB_URI environment variable
const uri = process.env.MONGODB_URI;
console.log(process.env);
console.error("Connection string:", uri);
mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
		// Create a MongoClient with a MongoClientOptions object to set the Stable API version
		const client = new MongoClient(uri, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
		});

		async function run() {
			try {
				// Connect the client to the server (optional starting in v4.7)
				await client.connect();
				// Send a ping to confirm a successful connection
				await client.db("admin").command({ ping: 1 });
				console.log(
					"Pinged your deployment. You successfully connected to MongoDB!"
				);
			} catch (err) {
				console.error("Error connecting to MongoDB:", err);
			} finally {
				// Ensures that the client will close when you finish/error
				await client.close();
			}
		}

		run().catch(console.dir);
	})
	.catch((err) => {
		console.error("Error connecting to MongoDB:", err);
	});

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

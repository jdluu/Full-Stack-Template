// Import React and Next.js components
import React from "react";
import Head from "next/head";
import Link from "next/link";

// Define a function that returns the homepage component
function Home() {
	return (
		<div>
			<Head>
				<title>My Website</title>
			</Head>
			<h1>Welcome to my website!</h1>
			<p>This is the homepage.</p>
			<Link href="/about">Go to the about page</Link>
		</div>
	);
}

// Export the function as the default export
export default Home;

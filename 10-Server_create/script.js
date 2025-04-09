// Import the built-in http module
import http from "http";

// Create a server using http module
const server = http.createServer((req, res) => {
  // Set the HTTP status code and content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send a plain text response and end the request
  res.end("Hello, this is Niloy's server!");
});

// Start the server and listen on port 5000
server.listen(5000, () => {
  // Log a message when the server starts successfully
  console.log("Server is running on http://localhost:5000");
});

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") { // Request with server url
        res.write("Welcome to the homepage!"); // Server respond
        res.end(); // End to respond from server
    }

    if (req.url === "/api/courses"){ // Use localhost:3000/api/courses
        res.write(JSON.stringify( // JSON works as a Database and respond a package of data
            [1, 2, 3, 4, 5] // Respond as array for many data
        ));
        res.end();
    }
}); // Use http to create a server

server.listen(3000); // Be able to run with localhost:3000

console.log("Listening on port 3000..."); // Just to see the respond in the console if the server is got ready

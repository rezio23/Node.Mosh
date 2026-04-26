//(function (exports, require, module, __filename, __dirname) { // Module wrapper function (Unnecessary)

console.log(__filename); // Check file name
console.log(__dirname); // Check dir name

let url = "http://mylogger.io/log";

function log(message) {
  // Send HTTP request to the url
    console.log(message);
}

// Make the function public

// module.exports.method = function;
// module.exports.log = log;
module.exports = log; // Short for a single function
// exports.log = log; // Other side

// module.exports.endPoint = url; // Use other word beside url

// })

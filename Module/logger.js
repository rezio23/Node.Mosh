// Node internally wraps each file in a function like:
// (function (exports, require, module, __filename, __dirname) { ... })

console.log(__filename); // Absolute path to this file
console.log(__dirname); // Absolute path to this folder

const url = 'http://mylogger.io/log';

function log(message) {
  // In a real app, this is where you could send an HTTP request to `url`.
  console.log(message);
}

// Export the function directly so consumers can call: logger('hello')
module.exports = log;

// Alternative export style:
// module.exports.log = log;
// module.exports.endPoint = url;

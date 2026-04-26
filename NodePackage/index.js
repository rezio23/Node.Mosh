let _ = require('underscore'); // underscore is a module
// When we require a function, it supply the module as a core module

// Core module or File or Folder ?
// in the require method, if we use ./ or ../, it will be a file or a folder.
// In this case, it was a Core Module

// Now use Underscore
let result = _.contains([1, 3, 5], 2); // It check if the array contained 2 or not
console.log(result);
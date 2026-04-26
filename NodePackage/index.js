const _ = require('underscore');
// `underscore` is a third-party npm package (not a Node core module).
// In `require()`:
// - `./` or `../` loads a local file/folder.
// - A bare name like `underscore` loads from `node_modules`.

// Use underscore to check whether an array contains a value.
const result = _.contains([1, 3, 5], 2);
console.log(result);

const express = require('express');

const app = express();

app.get('/', (req, res) => { // Just enter localhost:3000
    res.send('Hello World!')
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4, 5])
})

// Get specific value
app.get('/api/courses/:id', (req, res) => { // localhost:3000/api/courses/1
    res.send(req.params.id)
})

// Get Date
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params) // localhost:3000/posts/2026/3
})

// PORT
// app.listen(3000, () => { // Port = 3000
//     console.log('Listening on port 3000');
// })

// Use Environment Variable instead of PORT
const port = process.env.PORT || 3000; // process.env is a global object
// To set to PORT number in terminal => set PORT=5000
app.listen(port, () => console.log(`Listening on port ${port}`))




// app.get = READ
// app.post = INSERT
// app.put = UPDATE
// app.delete = DELETE
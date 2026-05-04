const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'Java'},
    { id: 2, name: 'Node'},
    { id: 3, name: 'Kotlin'}
]


app.get('/', (req, res) => { // Just enter localhost:3000
    res.send('Hello World!')
});

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

// Get specific value
// app.get('/api/courses/:id', (req, res) => { // localhost:3000/api/courses/1
//     res.send(req.params.id)
// })

// Get Date
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params) // localhost:3000/posts/2026/3
})

// GET Request
app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) res.status(404).send('The course with the given ID was not found!') // 404 meant Object not Found
    res.send(course);
})

// POST Request
app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});




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
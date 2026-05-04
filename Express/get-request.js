const express = require('express');
const app = express();

const courses = [
    { id: 1, name: 'Java'},
    { id: 2, name: 'Node'},
    { id: 3, name: 'Kotlin'}
]

// GET Request
app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id))
    // We use Arrow function c to find the Boolean value c.id
    // c.id determines if the value that we are looking for or not

    if(!course) res.status(404).send('The course with the given ID was not found!') 
    // 404 meant Object not Found

    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))

// Testing: localhost:3000/api/courses/1
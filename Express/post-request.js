const express = require('express');
const app = express();

app.use(express.json());
// To allow using "body" property

const courses = [
    { id: 1, name: 'Java'},
    { id: 2, name: 'Node'},
    { id: 3, name: 'Kotlin'}
]

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
        // We need to enable parsing up json object in the body of express
    };
    courses.push(course); // Push data to courses array
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
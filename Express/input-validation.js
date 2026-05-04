const Joi = require('joi'); // Version 13.1.0
const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    { id: 1, name: 'Java'},
    { id: 2, name: 'Node'},
    { id: 3, name: 'Kotlin'}
]

app.post('/api/courses', (req, res) => {
        
    // JOI Package
    // Define Schema
    const schema = {
        name: Joi.string().min(3).required()
    }
    
    const result = Joi.validate(req.body, schema);
    // console.log(result);
    
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    // Then, test with POSTMAN, and the result will shown in the console


    // Basic Validation
    // if(!req.body.name || req.body.name < 3) {
    //     // HTTP 400 Bad Request
    //     res.status(400).send('Name is required and should be at least 3 characters!');
    //     return;
    // }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
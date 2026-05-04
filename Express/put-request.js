const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    { id: 1, name: 'Java'},
    { id: 2, name: 'Node'},
    { id: 3, name: 'Kotlin'}
]

app.put('/api/courses/:id', (req, res) => {
    
    // Look up the courses
    // If not existed, Return 404(Course not found)
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Cannot find this course id!');
    res.send(course);

    // Validate
    // If invalid, Return 400(Bad Request)

    // Normal Form
    // const result = validateCourse(req.body);
    // if(result.error){
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    // }
    
    // Object Destructure
    const { error } = validateCourse(req.body); // result.error
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    // Update
    course.name = req.body.name;
    // Return Update
    res.send(course);

});

// Make the validation Reuseable
function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
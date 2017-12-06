const apiRouter = require('express').Router();
const { Campus, Student } = require('../db/models');

apiRouter.get('/', (req, res, next) => {
    Student.findAll()
    .then(students => res.send(students))
    .catch(next);
})

apiRouter.get('/:studentId', (req, res, next) => {
    const studentId = req.params.studentId
    Student.findOne({
        where: {
            id: studentId
        }
    })
    .then(student => res.send(student))
    .catch(next);
})

apiRouter.post('/', (req, res, next) => {
    Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gpa: req.body.gpa
    })
    .then(student => {
        res.send({ message: 'Student created successfully', student: student })
    })
    .catch(next);
})

// apiRouter.delete('/', (req, res, next) => {

// })


module.exports = apiRouter
const apiRouter = require('express').Router();
const { Campus, Student } = require('../db/models');

apiRouter.get('/', (req, res, next) => {
    Student.findAll({include: {all: true}})
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
        gpa: req.body.gpa,
        campusId: req.body.campusId
    })
    .then(student => {
        res.send({ message: 'Student created successfully', student: student })
    })
    .catch(next);
})


apiRouter.put('/:studentId', (req, res, next) => {
    const studentId = req.params.studentId;
    console.log(req.body.firstName)
    Student.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gpa: req.body.gpa,
        campusId: req.body.campusId
    }, {
        where: {
            id: studentId
        }, 
        returning: true
    })
    .then(student => {
        // res.send(student[1][0])
        res.send(student)
    })
})

apiRouter.delete('/:studentId', (req, res, next) => {
    const studentId = req.params.studentId
    console.log(studentId)
    Student.destroy({where: {id: studentId}})
    .then(() => {
        res.json(studentId)
    })
  

})


module.exports = apiRouter
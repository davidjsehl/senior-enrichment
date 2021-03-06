const apiRouter = require('express').Router();
const { Campus, Student } = require('../db/models');

apiRouter.get('/', (req, res, next) => {
    Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
})

apiRouter.get('/:campusId', (req, res, next) => {
    const campusId = req.params.campusId;
    Campus.findOne({
        where: {
            id: campusId
        }
    })
    .then(campus => {res.send(campus)})
    .catch(next);
})

apiRouter.post('/', (req, res, next) => {
    Campus.create({
        name: req.body.name, 
        imageUrl: req.body.imageUrl,
        description: req.body.description
    })
    .then(campus => {
        res.send({ message: 'Campus created successfully', campus: campus })
    })
    .catch(next);
})

apiRouter.put('/:campusId', (req, res, next) => {
    var campusId = req.params.campusId;
    
    Campus.update({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description 
    }, {
        where: {
            id: campusId
        },
        returning: true
    })
    .then(campus => {
        res.send(campus)
    })
    .catch(next)
})
// { message: 'Updated successfully', campus: campus[1][0] }

apiRouter.delete('/:campusId', (req, res, next) => {
    const campusId = req.params.campusId
    // console.log(studentId)
    Campus.destroy({ where: { id: campusId } })
        .then(() => {
            res.json(campusId)
        })


})


// apiRouter.delete()

module.exports = apiRouter;
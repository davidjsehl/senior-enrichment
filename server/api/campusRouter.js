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
    var name = req.body.name;
    var url = req.body.imageUrl;
    var description = req.body.description;
    Campus.create({
        name: name, 
        imageUrl: url,
        description: description
    })
    .then(campus => {
        res.send({message: 'Campus created successfully', campus: campus})
    })
    .catch(next);
})

// apiRouter.put('/:campusId', (req, res, next) => {
//     var campusId = req.params.id;
    
//     Campus.update({
//         name: req.body.name,
//         imageUrl: req.body.imageUrl,
//         description: req.body.description 
//     }, {
//         where: {
//             id: campusId
//         },
//         returning: true
//     })
//     .then(campus => {
//         res.send(campus)
//     })
//     .catch(next)
// })
// { message: 'Updated successfully', campus: campus[1][0] }



// apiRouter.delete()

module.exports = apiRouter;
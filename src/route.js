const UserController = require('./controllers/UserController')
const CameraController = require('./controllers/CameraController')
const Camera = require('./models/Camera')

module.exports = (app) => {
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)
    app.get('/users', UserController.index)
    //User

    app.post('/camera', CameraController.create)
    app.put('/camera/:cameraId', CameraController.put)
    app.delete('/camera/:cameraId', CameraController.remove)
    app.get('/camera/:cameraId', CameraController.show)
    app.get('/cameras', CameraController.index)
    
    app.post('/upload', function (req, res) {
        upload(req, res, function (err) {
            // isUserAuthenicated,
            if (err) {
                return res.end("Error uploading file.")
            }
            res.end("File is uploaded")
        })
    })
    app.post('/upload/delete', async function (req, res) {
        try {
            const fs = require('fs');
            console.log(req.body.filename)
            fs.unlink(process.cwd() + '/public/uploads/' + req.body.filename,
                (err) => {
                    if (err) throw err;
                    res.send("Delete sucessful")
                    // console.log('successfully deleted material file');
                });
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to delete file the material'
            })
        }

    })

}
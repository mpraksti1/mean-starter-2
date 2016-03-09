// app/routes.js

// grab the User model we just created
var User    = require('./models/user');
var Lesson  = require('./models/lesson');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/user', function(req, res) {
        // use mongoose to get all users in the database
        User.find(function(err, users) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(users); // return all users in JSON format
        });
    });

     app.get('/api/user/:_id', function(req, res) {
        // use mongoose to get all users in the database
        User.findById(req.params._id, function(err, user) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(user); // return all users in JSON format
        });
    });   

    // route to handle creating goes here (app.post)
    app.post('/api/user', function(req, res) {

        var user = new User();
        user.name = req.body.name;

        // save the user and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });
    });

    app.put('/api/user/:_id', function(req, res) {
        User.findById(req.params._id, function(err, user) {
        var d = new Date();
        var timestampM = d.getMonth();

            if (err) res.send(err);
            if (req.body.krav == true) user.krav.push({date: timestampM });
            if (req.body.jujitsu == true) user.jujitsu.push({date: timestampM });
            if (req.body.kempo == true) user.kempo.push({date: timestampM });
            // set the new user information if it exists in the request            

            // save the user
            user.save(function(err) {
               if (err) res.send(err);

                // return a message
                res.json({ message: 'User updated!' });

             });
        });
    });

    //LESSON ROUTES

    app.get('/api/lesson', function(req, res) {
        // use mongoose to get all users in the database
        Lesson.find(function(err, lessons) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(lessons); // return all users in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    app.post('/api/lesson', function(req, res) {

        var lesson = new Lesson();
        lesson.name = req.body.name;

        // save the user and check for errors
        lesson.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Lesson created!' });
        });
    });

    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
// app/routes.js

// grab the User model we just created
var User = require('./models/user');
var Lesson = require('./models/lesson');

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

    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
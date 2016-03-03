// app/models/user.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our User model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
    name : {type : String, default: ''},
   	krav: [{ 
   		timestamp: { type: Date, default: Date.now } 
   	}],
   	jujitsu: [{ 
   		timestamp: { type: Date, default: Date.now } 
   	}],
   	kempo: [{ 
   		timestamp: { type: Date, default: Date.now } 
   	}], 
});
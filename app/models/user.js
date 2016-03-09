// app/models/user.js
// grab the mongoose module
var mongoose = require('mongoose');
var d = new Date();
var timestampM = d.getMonth();
var timestampY = d.getFullYear();

console.log('timestamp is', timestampM);

// define our User model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
   name : {type : String, default: ''},
	krav: [{ 
		timestampM: { type: Number, default: timestampM },
      timestampY: { type: Number, default: timestampY }  
	}],
	jujitsu: [{ 
		timestampM: { type: Number, default: timestampM },
      timestampY: { type: Number, default: timestampY }  
	}],
	kempo: [{ 
		timestampM: { type: Number, default: timestampM },
      timestampY: { type: Number, default: timestampY }  
	}], 
});
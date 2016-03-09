// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', ['UserService']).controller('MainController', [
	'$scope',
	'$routeParams',
	'User',
	'Lesson',

	function($scope, $routeParams, User, Lesson) {
		$scope.user = {};
		$scope.users = [];

		$scope.lesson = {};
		$scope.lessons = [];

		$scope.userData = {};
		
		User.get().then(function(response) {
		   	$scope.users = response.data;
		   	console.log($scope.users);
		});

		Lesson.get().then(function(response) {
		   	$scope.lessons = response.data;
		});

	    $scope.addAUser = function(){
	    	User.create( $scope.user )
		    	.then(function(){
		    	 	$scope.user = {};
		    		console.log('added');
		    	})
	    	;
    	};

    	$scope.addALesson = function(){
	    	Lesson.create( $scope.lesson )
		    	.then(function(){
		    	 	$scope.lesson = {};
		    		console.log('added');
		    	})
	    	;
    	};

    	$scope.setStudent = function(curr){
    		$scope.userData = curr;
    		console.log("inside", $scope.userData);
    	}

    	$scope.classRecordsFor = function(lesson) {

    		var currYear = $scope.userData[lesson][0].timestampY;

    		$scope.yearsCollection = [{ 
    			years: [
    				{ year: currYear, 
    				  	months: [
							{ name: 'January', count: 0},
							{ name: 'February', count: 0},
							{ name: 'March', count: 0},
							{ name: 'April', count: 0},
							{ name: 'June', count: 0},
							{ name: 'July', count: 0},
							{ name: 'August', count: 0},
							{ name: 'September', count: 0},
							{ name: 'October', count: 0},
							{ name: 'November', count: 0},
							{ name: 'December', count: 0}
						]
    				}
    			]
    		}];

    		for ( var i = 0; i < $scope.userData[lesson].length; i++ ) { 
    			//console.log($scope.userData[lesson][i].timestampY);
    			if($scope.userData[lesson][i].timestampY !== currYear) {
    				$scope.yearsCollection[0].years.push({
    					year: $scope.userData[lesson][i].timestampY,
    					months: [
							{ name: 'January', count: 0},
							{ name: 'February', count: 0},
							{ name: 'March', count: 0},
							{ name: 'April', count: 0},
							{ name: 'June', count: 0},
							{ name: 'July', count: 0},
							{ name: 'August', count: 0},
							{ name: 'September', count: 0},
							{ name: 'October', count: 0},
							{ name: 'November', count: 0},
							{ name: 'December', count: 0}
						]
    				});
    				
    				var currYear = $scope.userData[lesson][i].timestampY;
    			}
    		}

    		$scope.yearsCollection[0].years.sort(function (a, b) {
			  if (a.year > b.year) {
			    return 1;
			  }
			  if (a.year < b.year) {
			    return -1;
			  }
			  return 0;
			});

    		console.log($scope.yearsCollection[0].years.length);

    		for ( var t = 0; t < $scope.yearsCollection[0].years.length; t++ ) {
	    		for ( var j = 0; j < $scope.userData[lesson].length; j++ ) {
	    		 	for ( var i = 0; i < 12; i++ ) {
	    		 		 if ($scope.userData[lesson][j].timestampM === i && $scope.userData[lesson][j].timestampY === $scope.yearsCollection[0].years[t].year) {
	    		 		 	$scope.yearsCollection[0].years[t].months[i].count++;
	    		 		 }
	    		 	}
	    		}
	    	}
    	}

    	$scope.curr = function(curr){
    		console.log("outside", $scope.userData);
    	}

    	$scope.signIn = function(lesson) {

			 // call the userService function to update
			 console.log('before' , $scope.userData);
			 $scope.userData[lesson] = true;
			 console.log('after' , $scope.userData);
			 User.put($scope.userData._id, $scope.userData)
			 	.success(function(data) {
				 // clear the form
				 $scope.userData = {};
			 });
		};


	}
]);
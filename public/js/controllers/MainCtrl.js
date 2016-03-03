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
		});

		Lesson.get().then(function(response) {
		   	$scope.lessons = response.data;
		   	console.log($scope.lessons);
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
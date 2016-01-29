// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', ['UserService']).controller('MainController', [
	'$scope',
	'User',
	'Lesson',

	function($scope, User, Lesson) {
		$scope.user = {};
		$scope.users = [];

		$scope.lesson = {};
		$scope.lessons = [];

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
	}
]);
// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', ['UserService']).controller('MainController', [
	'$scope',
	'User',

	function($scope, User) {
		$scope.user = {};
		$scope.users = [];

		User.get().then(function(response) {
		   	$scope.users = response.data;
		});

	    $scope.addAUser = function(){
	    	User.create( $scope.user )
		    	.then(function(){
		    	 	$scope.user = {};
		    		console.log('added');
		    	})
	    	;
    	};
	}
]);
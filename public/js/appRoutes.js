// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // users page that will use the NerdController
        .when('/user', {
            templateUrl: 'views/user.html',
            controller: 'UserController'
        })

        .when('/userrecords', {
            templateUrl: 'views/userrecords.html',
            controller: 'UserController'
        })
        
        .when('/record', {
            templateUrl: 'views/record.html',
            controller: 'UserController'
        })
        .otherwise({redirectTo:'/'});;

    $locationProvider.html5Mode(true);

}]);
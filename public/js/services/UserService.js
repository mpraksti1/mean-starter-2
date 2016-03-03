// public/js/services/UserService.js
angular.module('UserService', [])

.factory('User', ['$http', function($http) {

    return {
        // call to get all users
        get : function(id) {
            if(id) {
                return $http.get('/api/user/' + id);
            } else {
                return $http.get('/api/user');
            }
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new user
        create : function(userData) {
            return $http.post('/api/user', userData);
        },

        put : function(id, userData) {
            return $http.put('/api/user/' + id, userData);
        },

        // call to DELETE a user
        delete : function(id) {
            return $http.delete('/api/user/' + id);
        }
    }       

}])

.factory('Lesson', ['$http', function($http) {

    return {
        // call to get all users
        get : function(callback) {
            return $http.get('/api/lesson');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new lesson
        create : function(lessonData) {
            return $http.post('/api/lesson', lessonData);
        },

        // call to DELETE a lesson
        delete : function(id) {
            return $http.delete('/api/lesson/' + id);
        }
    }
}]);
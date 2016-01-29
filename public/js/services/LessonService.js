// public/js/services/UserService.js
angular.module('LessonService', []).factory('Lesson', ['$http', function($http) {

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
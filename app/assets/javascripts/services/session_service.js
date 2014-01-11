angular.module('checkeroo.services')
    .factory('Session', 
        function ($resource) {
            return {
                get: function(params, callback) {
                    $resource('api/v1/session', params).post(callback);
                }
            };
        }
    );
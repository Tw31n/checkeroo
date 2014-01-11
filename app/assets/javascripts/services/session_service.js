angular.module('checkeroo.services')
    .factory('Session', function ($resource) {
            return $resource('api/session');
        }
    );
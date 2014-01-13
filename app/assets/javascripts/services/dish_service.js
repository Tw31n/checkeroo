angular.module('checkeroo.services')
.factory('Dish',
    function ($resource) {
        return $resource('api/dishes', {});
    }
);
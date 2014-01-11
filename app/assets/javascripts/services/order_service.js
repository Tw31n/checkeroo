angular.module('checkeroo.services')
    .factory('Order', 
        function ($resource) {
            return $resource('api/order_items');
        }
    );
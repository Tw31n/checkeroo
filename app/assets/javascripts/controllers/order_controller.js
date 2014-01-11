'use strict';

angular.module('checkeroo.controllers')
    .controller('OrderController', ['$scope', 'Dish', function ($scope, Dish) {

        $scope.placeOrder = function () {
            console.log($scope.dish);
            // Dish.save($scope.dish, function (response) {
            //     resetOrder();
            // });
        };

        var resetOrder = function () {
            $scope.dish = {};
        };

        resetOrder();
    }]);
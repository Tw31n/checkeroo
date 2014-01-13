'use strict';

angular.module('checkeroo.controllers')
    .controller('OrderController', ['$scope', 'Order', 'Dish', 'Session', '$location', function ($scope, Order, Dish, Session, $location) {
        if(!Session.user_name) {
            $location.path('/join');
        }

        $scope.placeOrder = function () {
            Order.save($scope.dish, function(response) {
               $scope.dishes.push(response);
               resetOrder();
            });
        };

        $scope.loadDishes = function () {
            var params = { party_name: Session.party_name };

            Dish.get(params, function (response) {
                $scope.dishes = response.dishes;
            });
        };

        $scope.ownPaySum = function () {
            var result = 0;

            angular.forEach($scope.dishes, function(dish) {
                for(var i = 0; i < dish.participants.length; i++) {
                    if(dish.participants[i] == Session.user_name)
                      result+= dish.price;
                };
            });

            return result;
        };

        var resetOrder = function () {
            $scope.dish = {};
        };

        var init = function () {
            resetOrder();
            $scope.loadDishes();
        };

        init();
    }]);
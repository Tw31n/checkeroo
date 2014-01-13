'use strict';

angular.module('checkeroo.controllers')
    .controller('OrderController', ['$scope', 'Order', 'Dish', function ($scope, Order, Dish) {
        $scope.session = {
            party_name: "party",
            user_name: "alex"
        };

        $scope.placeOrder = function () {
            Order.save($scope.dish, function(response) {
               $scope.dishes.push(response);
               resetOrder();
            });
        };

        $scope.loadDishes = function () {
            var params = { party_name: $scope.session.party_name };

            Dish.get(params, function (response) {
                $scope.dishes = response.dishes;
            });
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
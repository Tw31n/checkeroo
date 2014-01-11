'use strict';

angular.module('checkeroo.controllers')
    .controller('OrderController', ['$scope', 'Order', 'Dish', function ($scope, Order, Dish) {

        $scope.placeOrder = function () {
            // Dish.save($scope.dish, function (response) {
                // resetOrder();
            // });
        };

        $scope.loadDishes = function () {
            var params = { party_name: $scope.session.party_name };

            Dish.get(params, function (response) {
                if(response.status == 'OK') {
                    $scope.dishes = response.dishes;
                }
            });
        };

        var needUpdate = function () {
            var hasName = !!$scope.order.name;
            var hasPrice = !!$scope.order.price;

            return hasName && hasPrice;
        };

        var resetOrder = function () {
            $scope.dish = {};
        };

        var init = function () {
            resetOrder();
            $scope.loadDishes();
        };

        init();

        $scope.order = {
            name: 'fish',
            price: '10',
            participants: ['john', 'jane']
        };

        $scope.dishes = [
            {
                name: 'fish',
                price: '10',
                participants: ['john', 'jane']
            },
            {
                name: 'fish',
                price: '10',
                participants: ['john', 'jane']
            },
            {
                name: 'fish',
                price: '10',
                participants: ['john', 'jane']
            },
        ];
    }]);
'use strict';

angular.module('checkeroo.controllers')
    .controller('OrderController', ['$scope', 'Session', 'Order', function ($scope, Session, Order) {

        $scope.addOrder = function () {
            if(needUpdate) {
                var params = $scope.order;
                params.participants.push(Session.currentUser);

                Order.save(params, function (response) {
                    if(response.status == 'OK') {
                        resetOrder();
                        alert('Update!');
                    }
                });
            } else {
                alert('Nothing update! Fill all fields');
            }
        };

        var needUpdate = function () {
            var hasName = !!$scope.order.name;
            var hasPrice = !!$scope.order.price;

            return hasName && hasPrice;
        };

        var resetOrder = function () {
            $scope.order = {
                name: undefined,
                price: undefined,
                participants: [],
                time: new Date
            };
        };

        resetOrder();

        $scope.order = {
            name: 'fish',
            price: '10',
            participants: ['john', 'jane'],
            time: new Date
        };

    }]);
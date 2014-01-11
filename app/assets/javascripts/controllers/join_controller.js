'use strict';

angular.module('checkeroo.controllers')
    .controller('JoinController', ['$scope', 'Session', '$location', function ($scope, Session, $location) {
        $scope.session = {};

        $scope.join = function() {
            Session.save($scope.session, function (response) {
                $location.path('order');
            });
        }
    }]);
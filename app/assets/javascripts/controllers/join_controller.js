'use strict';

angular.module('checkeroo.controllers')
    .controller('JoinController', ['$scope, Session', function ($scope, Session) {
        $scope.join = function() {
            var params = {
                login: $scope.login,
                partyName: $scope.partyName
            };

            Session.get(params, function (response) {
                if(response.status == 'OK') {
                    $location.path('order');
                }
            });
        }
    }]);
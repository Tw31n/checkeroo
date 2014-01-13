'use strict';

angular.module('checkeroo.controllers')
    .controller('JoinController', ['$rootScope', '$scope', 'Session', '$location', function ($rootScope, $scope, Session, $location) {
        $rootScope.session = {};

        $scope.join = function() {
            Session.save($rootScope.session, function (response) {
                Session.user_name = response.user_name;
                Session.party_name = response.party_name;
                $location.path('order');
            });
        }
    }]);
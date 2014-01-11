'use strict';

angular.module('checkeroo.controllers', []);

angular.module('checkeroo.directives', []);
angular.module('checkeroo.services', ['ngResource']);
angular.module('checkeroo.factories', []);
angular.module('checkeroo.filters', []);

angular.module('checkeroo', [
        'ngRoute',
        'checkeroo.controllers',
        'checkeroo.services',
        'checkeroo.directives',
        'checkeroo.factories',
        'checkeroo.filters'
    ])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    }])
    .config(['$httpProvider', function ($httpProvider) {
        var authToken = $("meta[name=\"csrf-token\"]").attr("content");
        $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/join', {
                templateUrl: 'templates/join.html',
                controller: 'JoinController'
            })
            .when('/order', {
                templateUrl: 'templates/order.html',
                controller: 'OrderController'
            })
            .otherwise({redirectTo: '/join'});
}]);

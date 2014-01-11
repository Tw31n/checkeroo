'use strict';

angular.module('app.controllers', []);

angular.module('app.directives', []);
angular.module('app.services', ['ngResource']);
angular.module('app.factories', []);
angular.module('app.filters', []);

angular.module('app', [
        'ngRoute',
        'app.controllers',
        'app.services',
        'app.directives',
        'app.factories',
        'app.filters'
    ])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    }])
    .config(['$routeProvider', function ($routeProvider) {
            
        $routeProvider
            .when('/join', {
                templateUrl: 'templates/join.html',
                controller: 'JoinController'
            })
            .otherwise({redirectTo: '/join'});
}]);
  
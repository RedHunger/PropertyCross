var angular = require('angular');
require("angular-ui-router");
var app = angular.module('app',['ui.router']);
var angularUiRouter = require("angular-ui-router");

app.controller('initCtrl', ['$scope', function($scope) {
    $scope.greeting = 'Hello,';
}]);


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('about', {
            url: "/about",
            templateUrl: 'about.html'
        });
    
});
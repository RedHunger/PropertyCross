var angular = require('angular');
require("angular-ui-router");
require("bootstrap/dist/css/bootstrap.css");
var app = angular.module('app',['ui.router']);
var angularUiRouter = require("angular-ui-router");

require('./components/search/SearchCtrl.js');
app.controller('SearchCtrl', ['$scope', function($scope,$http) {
    var url="http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=" + page + "&place_name=";
    $http.get(url)
        .then(function(response) {
            $scope.dataApi = response.data.records;
        });
    $scope.greeting = 'Hello,';
}]);


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('search', {
            url: "/search",
            templateUrl: './components/search/search.html'
        })

        .state('new', {
            url: "/new",
            template: '<h3>New Page</h3>'
        })

    $urlRouterProvider.otherwise('/search');
});
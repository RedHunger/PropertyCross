var angular = require('angular');
var app = angular.module('app',['ui.router']);
var angularUiRouter = require("angular-ui-router");

require("angular-ui-router");
require("bootstrap/dist/css/bootstrap.css");
require('./components/search/SearchCtrl.js');



app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('search', {
            url: "/search",
            templateUrl: './components/search/state-search.html'
        })

        .state('new', {
            url: "/new",
            template: '<h3>New Page</h3>'
        })

    $urlRouterProvider.otherwise('/search');
});
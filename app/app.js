var angular = require('angular');
require("angular-ui-router");

var app = angular.module('app',['ui.router']);

require("angular-ui-router");
require("bootstrap/dist/css/bootstrap.css");
require('./service/search.js');
require('./components/search/SearchCtrl.js');




app.config(function ($stateProvider,$qProvider,$urlRouterProvider) {

    $stateProvider
        .state('search', {
            url: "/search",
            templateUrl: './components/search/state-search.html'
        })

        .state('new', {
            url: "/new",
            template: '<h3>New Page</h3>'
        })

        .state('search.error', {
            url: "/error",
            views : {
                "resultView" :{
                    templateUrl: './components/search/search-error.html'
                }

            },

        })

        .state('list', {
            url: "/list",
            template: '<h3>This is the LIST state</h3>'
        });

    $urlRouterProvider.otherwise('/search');
    // $qProvider.errorOnUnhandledRejections(false);
});
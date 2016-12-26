var angular = require('angular');
require("angular-ui-router");

var app = angular.module('app',['ui.router']);

require("angular-ui-router");
require("bootstrap/dist/css/bootstrap.css");
require("./style.css");
require('./service/search.js');
require('./components/search/SearchCtrl.js');
require('./components/list/ListCtrl.js');
require('./components/object/ObjectCtrl.js');




app.config(function ($stateProvider,$qProvider,$urlRouterProvider) {

    $stateProvider
        .state('search', {
            url: "/search",
            templateUrl: './components/search/state-search.html'
        })

        .state('search.error', {
            url: "/error",
            views : {
                "resultView" :{
                    templateUrl: './components/search/search-error.html'
                }

            }

        })

        .state('list', {
            url: "/list",
            templateUrl: './components/list/state-list.html',
            params: {
                searchQuery: null,
            }
        })

        .state('detail', {
            url: "/detail",
            templateUrl: './components/object/state-object.html',
            params: {
                item: null,
            }
        });

    $urlRouterProvider.otherwise('/search');
});
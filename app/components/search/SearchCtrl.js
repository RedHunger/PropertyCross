var angular = require("angular");
var app = angular.module('app');
require("angular-ui-router");
app.component('searchcomp', {
    controller: SearchCtrl,
    controllerAs: 'search',
    templateUrl: './src/components/search/search.html'
});


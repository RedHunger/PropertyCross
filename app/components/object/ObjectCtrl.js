var angular = require("angular");
var app = angular.module('app');

app.component( "objectcomp", {
    controller: ["searchService", "$stateParams",function ObjectCtrl (searchService,$stateParams) {
        this.message = 'Detail Page';
        this.item = $stateParams.item;

    }],
    templateUrl: './components/object/object.html'
});
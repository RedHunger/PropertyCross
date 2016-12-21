var angular = require("angular");
var app = angular.module('app');

app.component( "searchcomp", {
    controller: function SearchCtrl () {
        this.greeting = 'Hello,';
        this.go = function () {
            window.alert("OK.GOOOOO!");
        }
    },
    templateUrl: './components/search/search.html'
});









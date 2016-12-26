var angular = require("angular");
var app = angular.module('app');

app.component("listcomp", {
        controller: ["searchService","$stateParams", function ListCtrl (searchService,$stateParams) {
            var that = this;
            that.newList = [];
            that.info ='List';
            searchService.apiget($stateParams.searchQuery).
                then(function (response) {
                    console.log(response);
                    that.newList = response.newList;
                });


        }],
        templateUrl: './components/list/list.html'
});
var angular = require("angular");
var app = angular.module('app');

app.component("listcomp", {
        controller: ["searchService","$state","$stateParams", function ListCtrl (searchService,$state,$stateParams) {
            var that = this;
            that.newList = [];
            that.info ='List';
            searchService.apiget($stateParams.searchQuery).
                then(function (response) {
                    that.newList = response.newList;
                });

            that.openDetail = function(item){
                if(item){
                    $state.go('detail', {item: item});
                }
            };


        }],
        templateUrl: './components/list/list.html'
});
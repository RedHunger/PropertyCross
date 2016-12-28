var angular = require("angular");
var app = angular.module('app');

app.component("listcomp", {
        controller: ["searchService","$state","$stateParams", function ListCtrl (searchService,$state,$stateParams) {
            var that = this;
            this.totalItems = 30;
            this.currentPage = 1;
            this.setPage = function (pageNo) {
                that.currentPage = pageNo;
            };

            that.newList = [];
            that.info ='List';
            searchService.apiget($stateParams.searchQuery).
                then(function (response) {
                // console.log(response);
                that.result = JSON.parse(response.localStorage.getItem("resultApi"));
                that.success = response.localStorage.success;
                    // that.newList = response.newList;
                    // console.log(that.result);
                })

                .catch(function() {
                $state.go('search.error');
            });

            that.openDetail = function(item){
                if(item){
                    $state.go('detail', {item: item});
                }
            };


        }],
        templateUrl: './components/list/list.html'
});
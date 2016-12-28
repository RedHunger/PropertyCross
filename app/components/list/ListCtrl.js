var angular = require("angular");
var app = angular.module('app');

app.component("listcomp", {
        controller: ["searchService","$state","$stateParams", function ListCtrl (searchService,$state,$stateParams) {
            var that = this;
            that.result = [];
            this.totalItems = 30;
            this.currentPage = 1;
            this.changePage = function (numberPage) {
                that.currentPage = numberPage;
                searchService.apiget($stateParams.searchQuery, numberPage).
                    then(function (response) {
                        that.result = JSON.parse(response.localStorage.getItem("resultApi"));
                        that.success = response.localStorage.success;
                    }).catch(function() {
                        $state.go('search.error');
                    });
                return {
                    result : that.result,
                    success : that.success,
                }
            };


            searchService.apiget($stateParams.searchQuery).
                then(function (response) {
                // console.log(response);
                that.result = JSON.parse(response.localStorage.getItem("resultApi"));
                that.success = response.localStorage.success;
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
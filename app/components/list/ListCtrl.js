var angular = require("angular");
var app = angular.module('app');

app.component("listcomp", {
        controller: ["searchService","$state","$stateParams", function ListCtrl (searchService,$state,$stateParams) {
            var that = this;
            that.result = [];
            that.totalItems = 1440;
            that.currentPage = 1;
            that.resultLength = 20;
            that.total_pages = 1;
            that.maxSize = 5;

            this.changePage = function (numberPage) {
                that.currentPage = numberPage;
                searchService.apiget($stateParams.searchQuery, numberPage).
                    then(function (response) {
                        that.result = JSON.parse(response.localStorage.getItem("resultApi"));
                        that.success = response.localStorage.success;
                        that.total_pages = response.total_pages;
                        that.resultLength += that.result.length;
                    }).catch(function() {
                        $state.go('search.error');
                    });
                return {
                    result : that.result,
                    success : that.success,
                }
            };

            if ($stateParams.searchQuery == null){
                that.result = JSON.parse(localStorage.getItem("resultApi"));
                that.success = localStorage.success;
            }else{
                searchService.apiget($stateParams.searchQuery,$stateParams.page).
                        then(function (response) {
                            that.result = JSON.parse(response.localStorage.getItem("resultApi"));
                            that.success = response.localStorage.success;
                            that.total_pages = response.total_pages;
                        })

                        .catch(function() {
                            $state.go('search.error');
                        });
                }

            that.openDetail = function(item){
                if(item){
                    $state.go('detail', {item: item});
                }
            };


        }],
        templateUrl: './components/list/list.html'
});
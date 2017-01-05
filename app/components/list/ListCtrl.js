var angular = require("angular");
var app = angular.module('app');

app.component("listcomp", {
        controller: ["searchService","recentService","$state","$stateParams", function ListCtrl (searchService,recentService,$state,$stateParams) {
            var that = this;
            that.success = false;
            that.result = [];
            that.totalItems = 1440;
            that.totalPages = 136;
            that.currentPage = localStorage.getItem("page");
            that.itemsPerPage = 20;
            that.maxSize = 5;
            that.query = localStorage.getItem("location");

            that.changePage = function (searchQuery, numberPage) {
                that.currentPage = numberPage;
                return searchService.apiget($stateParams.searchQuery || searchQuery, numberPage).
                then(function (response) {
                    console.log(response);
                    // recentService.addRecentSearch(loc);
                    that.result = response.resultApi;
                    that.success = localStorage.success;
                    that.totalItems = response.total_results;
                    that.totalPages = response.total_pages || 1;
                    that.success = true ;
                    if (that.result.length) {
                        recentService.addRecentSearch($stateParams.searchQuery || searchQuery);
                    }
                }).catch(function() {
                    $state.go('search.error');
                });
            };
            if ($stateParams.searchQuery == null){
                that.changePage(localStorage.getItem("location"), localStorage.getItem("page"));
            } else {
                that.changePage($stateParams.searchQuery, $stateParams.page);
            }

            that.openDetail = function(item){
                if(item){
                    $state.go('detail', {item: item});
                }
            };

        }],
        templateUrl: './components/list/list.html'
});
var angular = require('angular');
var app = angular.module('app');
var _ = require('lodash');

app.factory('recentService',["$http", "$state" , recentService]);

function recentService() {
    var that = this;
    // var recentSearch = [];
    
    function addRecentSearch(item) {
        debugger;
        if(item){
            var recentSearch = getRecentSearch();
            recentSearch.unshift(item);

            if (recentSearch.length > 6) {
                recentSearch = recentSearch.slice(0,6);
            }
            localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
        }
        
    }

    function getRecentSearch() {
        var recentSearch =[];
            debugger;
        if (localStorage.getItem("recentSearch")) {
            recentSearch = JSON.parse(localStorage.getItem("recentSearch"));
        } else {
            recentSearch = [];
        }

        return recentSearch;
    }

    return {
        addRecentSearch : addRecentSearch,
        getRecentSearch: getRecentSearch,
    }
    
}

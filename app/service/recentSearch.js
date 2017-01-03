var angular = require('angular');
var app = angular.module('app');

app.factory('recentService',["$http", "$state" , recentService]);

function recentService() {
    var that = this;
    that.recentSearch = [];
    
    function addRecentSearch(item) {
        if(item){
            that.recentSearch.push(item);
            localStorage.setItem("recentSearch", JSON.stringify(that.recentSearch));
        }
        
    }

    function getRecentSearch() {
        var reverseSearch = [];
        recentSearch = JSON.parse(localStorage.getItem("recentSearch"));
        _.forEachRight(recentSearch, function(value) {
            reverseSearch.push(value);
        });

        return reverseSearch;
    }

    return {
        addRecentSearch : addRecentSearch,
        getRecentSearch: getRecentSearch,
    }
    
}

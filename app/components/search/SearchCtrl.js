var angular = require("angular");
var app = angular.module('app');


app.component( "searchcomp", {
    controller: ["searchService","recentService","$state",function SearchCtrl (searchService,recentService,$state) {
        var that = this;
        this.locations = {};
        this.recentSearchList = recentService.getRecentSearch();

        this.go = function () {
            searchService.apiget();
        };

        this.goSearch = function(loc){
            //recentService.addRecentSearch(loc);
            if (loc != undefined && loc != ''){
                $state.go('list', {searchQuery: loc, page: 1});
            }else{
                $state.go('search.error');
            }

        };

        this.searchFromRecentList = function(loc){
            $state.go('list',{searchQuery: loc, page : 1});
        };

        this.myLocation = function () {
            $state.go('search.location');
            searchService.getMyLocation()
                .then(function(result) {
                    searchService.getMyLocationList(result.latitude, result.longitude).
                        then(function (response){
                        that.locations = response.locationList;
                    });
                    window.alert('YES');
                });
        };

        this.searchFromList = function(item){
            $state.go('list',{
                searchQuery: item,
                page : 1
            });
        };

        this.showFavorite = function(){
            $state.go('favorite');
        };

    }],
    templateUrl: './components/search/search.html'
});









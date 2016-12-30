var angular = require("angular");
var app = angular.module('app');


app.component( "searchcomp", {
    controller: ["searchService","$state",function SearchCtrl (searchService,$state) {
        var that = this;

        this.locations = {};


        this.go = function () {
            searchService.apiget();
        };
        this.goSearch = function(loc){
            if (loc != undefined && loc != ''){
                $state.go('list', {searchQuery: loc, page: 1});
            }else{
                $state.go('search.error');
            }

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

        that.searchFromList = function(item){
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









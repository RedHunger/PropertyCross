var angular = require("angular");
var app = angular.module('app');


app.component( "searchcomp", {
    controller: ["searchService","$state",function SearchCtrl (searchService,$state) {
        this.go = function () {
            searchService.apiget();
        };
        this.goSearch = function(loc){
            if (loc != undefined && loc != ''){
                $state.go('list', {searchQuery: loc,page: 1});
            }else{
                $state.go('search.error');
            }

        };

        this.showFavorite = function(){
            $state.go('favorite');
        };

    }],
    templateUrl: './components/search/search.html'
});









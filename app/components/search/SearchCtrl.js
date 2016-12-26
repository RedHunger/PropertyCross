var angular = require("angular");
var app = angular.module('app');


app.component( "searchcomp", {
    controller: ["searchService","$state",function SearchCtrl (searchService,$state) {
        this.greeting = 'Hello,';
        this.go = function () {
            searchService.apiget();
        };
        this.goSearch = function(loc){
            if (loc != undefined && loc != ''){
                searchService.apiget(loc);
                $state.go('list', {searchQuery: loc});
            }else{
                $state.go('search.error');
            }

        };

    }],
    templateUrl: './components/search/search.html'
});









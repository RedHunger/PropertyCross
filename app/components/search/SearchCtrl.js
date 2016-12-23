var angular = require("angular");
var app = angular.module('app');


app.component( "searchcomp", {
    controller: ["searchService","$state",function SearchCtrl (searchService,$state) {
        this.greeting = 'Hello,';
        this.go = function () {
            searchService.getapi();
        };
        this.goSearch = function(location){
            console.log(location);
            if (location != undefined && location != ''){
                searchService.getapi(location);
                $state.go('list');
            }else{
                $state.go('search.error');
            }

        };

    }],
    templateUrl: './components/search/search.html'
});









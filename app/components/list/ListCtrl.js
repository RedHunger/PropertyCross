var angular = require("angular");
var app = angular.module('app');

app.component("listcomp", {
        controller: ["searchService",function ListCtrl (searchService) {
            var than = this;
            this.info ='List';
            debugger;
            searchService.apiget(town).
                then(function (response) {
                    console.log(response);
            });

        }],
        templateUrl: './components/list/list.html'
});
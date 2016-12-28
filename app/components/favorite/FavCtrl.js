var angular = require("angular");
var app = angular.module('app');

app.component("favcomp", {
    controller: ["searchService", function FavCtrl (searchService) {
        this.favList = searchService.getFavouriteList();
    }],
    templateUrl: './components/favorite/favorite.html'
});
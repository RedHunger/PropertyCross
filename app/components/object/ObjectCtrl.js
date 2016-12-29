var angular = require("angular");
var app = angular.module('app');

app.component( "objectcomp", {
    controller: ["searchService", "$stateParams",function ObjectCtrl (searchService,$stateParams) {
        var that = this;
        this.isClick = true;
        this.message = 'Detail Page';
        this.item = $stateParams.item;

        this.addToFavorite = function(item){
            var isAdd = searchService.addFavList(item);
                if (isAdd){
                    that.isClick = false;
                    window.alert("You added this house to favourite list")
                }else{
                    window.alert("You have already added this house to favourite list");
                }


        }


    }],
    templateUrl: './components/object/object.html'
});
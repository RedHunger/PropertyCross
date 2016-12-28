var angular = require('angular');
var app = angular.module('app');
var _ = require('lodash');

app.service('searchService',["$http", "$state" , searchService]);

function searchService($http) {
    var that = this;
    var favoriteList = [];

    function getFavouriteList(){
        favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
        if(favoriteList == null)
            favoriteList = [];
        return favoriteList;
    }

    function apiget (town) {
        var dataApi = {};
        var newList = {};
        var success = false;
        var url= "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name="+ town ;
        return $http.get(url).
                then(function(response) {
                    success = true;
                    dataApi = response.data.response.listings;
                    newList = _.map(dataApi, function (item) {
                       return {
                           title          : item.title,
                           price          : item.price_formatted,
                           img_url        : item.img_url,
                           bed_number     : item.bedroom_number,
                           bath_number    : item.bathroom_number,
                           summary        : item.summary
                       }
                    });
                    // localStorage.setItem('title',JSON.stringify(newList));
                localStorage.setItem("resultApi", JSON.stringify(newList));
                localStorage.setItem("success",success);
            return {
                // newList: newList,
                // success: success,
                localStorage: localStorage,


            } ;
        });



    }

    function addFavList (item){
        favoriteList.push(item);
        localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
        return true;
    }

   return {
       apiget: apiget,
       addFavList: addFavList,
       getFavouriteList: getFavouriteList,
   }
    
    
}

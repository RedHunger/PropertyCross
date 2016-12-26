var angular = require('angular');
var app = angular.module('app');
var _ = require('lodash');

app.service('searchService',["$http", "$state" , searchService]);

function searchService($http) {

    function apiget (town) {
        var dataApi = {};
        var newList = {};
        var url= "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name="+ town ;
        // console.log('this');
        return $http.get(url).
                then(function(response) {
                    dataApi = response.data.response.listings;
                    newList = _.map(dataApi, function (item) {
                       return {
                           price : item.price
                       }
                    });
            return {
                newList: newList
            } ;
        });



    }

   return {
       apiget: apiget
   }
    
    
}

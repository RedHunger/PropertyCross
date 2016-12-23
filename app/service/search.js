var angular = require('angular');
var app = angular.module('app');

app.service('searchService',["$http", "$state" , searchService]);

function searchService($http) {
    
    
    function apiget(town) {
        var url= "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name="+ town ;
        var dataApi = {};
        console.log('this');
        return $http.get(url).
                then(function(response) {
                return console.log(response.data.response.listings) ;
            });


    }
    
   return {
       getapi:apiget
   } 
    
    
}
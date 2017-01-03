var angular = require('angular');
var app = angular.module('app');
var _ = require('lodash');

app.factory('searchService',["$http", "$state" , searchService]);

function searchService($http) {
    var that = this;
    var locationList = [];
    that.favoriteList = [];


    function getFavouriteList(){
        that.favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
        if(that.favoriteList == null)
            that.favoriteList = [];
        return  that.favoriteList;

    }

    function apiget (town,page) {
        var dataApi = {};
        var newList = {};
        var success = false;
        var total_pages= {};
        var total_results = {};
        var url= "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page="+ page + "&place_name="+ town ;
        return $http.get(url).
                then(function(response) {
                console.log(response);
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
                localStorage.setItem("resultApi", JSON.stringify(newList));
                localStorage.setItem("success",success);
            return {
                localStorage: localStorage,
                total_pages: response.data.response.total_pages,
                total_results: response.data.response.total_results,
                location: response.data.request.location
            } ;
        });



    }

    function getMyLocationList(latitude, longitude) {
        var url = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&centre_point=' + latitude + ',' + longitude;

        return $http({
            method: 'GET',
            url: url
        }).then(function (response) {
            var list = response.data.response.locations;

            that.locationList = _.map(list, function(item){
                return {
                    title      : item.long_title,
                    place_name : item.place_name
                }
            });

            return {
                locationList : that.locationList
            }


        })

    }


    function getMyLocation(){

        return new Promise( function(resolve, reject) {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                var crd = pos.coords;
                var latitude = pos.coords.latitude;
                var longitude = pos.coords.longitude;

                console.log("True lat:" + latitude);
                console.log("True long:" + longitude);
                latitude  = 53.796760;
                longitude = -1.542109;
                console.log("Generate lat:" + latitude);
                console.log("Generate long:" + longitude);

                resolve({
                    latitude: latitude,
                    longitude: longitude,

                });

            }

            function error(err) {
                reject(Error('ERROR(' + err.code + '): ' + err.message));
            }

             navigator.geolocation.getCurrentPosition(success, error, options);
        });
    }

    function addFavList (item){
        if( !(_.find(that.favoriteList, item)) ) {
            that.favoriteList.push(item);
            localStorage.setItem("favoriteList", JSON.stringify(that.favoriteList));
            return true;
        }

        return false
    }

   return {
       apiget: apiget,
       addFavList: addFavList,
       getFavouriteList: getFavouriteList,
       getMyLocationList: getMyLocationList,
       getMyLocation: getMyLocation,
   }
    
    
}

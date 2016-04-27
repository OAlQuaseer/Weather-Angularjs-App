// My Module for my application.
var myApp = angular.module("weatherApp", ["ngRoute","ngResource"]);


//Configuration
myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/', {
        templateUrl:'pagesList/home.html',
        controller : 'homeController'
    })
    .when('/forecast', {
       templateUrl:'pagesList/forecast.html',
        controller : 'forecastController'
        
    })    
});


//Controllers
myApp.controller('homeController',['$scope',function($scope){
    
    
    
    
}]);
myApp.controller('forecastController',['$scope',function($scope){
    
    
    
    
}]);
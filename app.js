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

//Services
myApp.service("cityService",function(){
    
    this.cityName = 'Irvine, CA'
    
});

//Controllers
myApp.controller('homeController',['$scope','cityService',function($scope, cityService){
    
    $scope.cityName = cityService.cityName;
    
    $scope.$watch('cityName',function(){
        
        cityService.cityName = $scope.cityName;
    });
    
    
}]);
myApp.controller('forecastController',['$scope','cityService',function($scope, cityService){
    
    
     $scope.cityName = cityService.cityName;
    
}]);
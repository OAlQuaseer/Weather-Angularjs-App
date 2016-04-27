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
    .when('/forecast/:days', {
        templateUrl: 'pagesList/forecast.html',
        controller: 'forecastController'
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
myApp.controller('forecastController',['$scope','$routeParams','$resource','cityService',function($scope, $routeParams,$resource , cityService){
    
    $scope.cityName = cityService.cityName;
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',{
       callback:"JSON_CALLBACK" },{get:{method:"JSONP"}});
    
    $scope.days = $routeParams.days || 2;
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.cityName,cnt: $scope.days ,appid:'ca085a8f82de70bb7587f552ef9007db'});
    
     $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };

    
}]);
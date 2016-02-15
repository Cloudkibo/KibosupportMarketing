'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/getstarted', {
        templateUrl: 'app/getstarted/getstarted.html',
        controller: 'GetStartedCtrl'
      });
       
  });

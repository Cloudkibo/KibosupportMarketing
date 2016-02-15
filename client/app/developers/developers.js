'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/developers', {
        templateUrl: 'app/developers/developers.html',
        controller: 'DevelopersCtrl'
      });
       
  });

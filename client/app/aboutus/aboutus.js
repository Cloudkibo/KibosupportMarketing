'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/aboutus', {
        templateUrl: 'app/aboutus/aboutus.html',
        controller: 'AboutusCtrl'
      });
  });

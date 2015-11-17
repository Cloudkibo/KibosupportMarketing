'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/features', {
        templateUrl: 'app/features/features.html',
        controller: 'FeaturesCtrl'
      });
  });

'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/definitions', {
        templateUrl: 'app/definitions/definitions.html',
        controller: 'DefinitionsCtrl'
      });
       
  });

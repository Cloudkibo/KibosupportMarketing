'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      
       .when('/restapi', {
        templateUrl: 'app/restapi/restapi.html',
        controller: 'RestapiCtrl'
      });
  });

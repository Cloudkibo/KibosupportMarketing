'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/howto', {
        templateUrl: 'app/howto/howto.html',
        controller: 'howtoCtrl'
      });
       
  });

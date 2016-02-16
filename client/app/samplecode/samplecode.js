'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/samplecode', {
        templateUrl: 'app/samplecode/samplecode.html',
        controller: 'SamplecodeCtrl'
      });
       
  });

'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/thankyou', {
        templateUrl: 'app/thankyou/thankyou.html',
        controller: 'ThankYouCtrl'
      });
  });

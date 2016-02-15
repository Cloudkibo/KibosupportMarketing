'use strict';

angular.module('kiboMktApp')
  .directive('sidebar', function () {
    return {
      templateUrl: 'components/sidebar/sidebar.html',
      restrict: 'E',
      controller: 'SidebarCtrl'
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name tadaListApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tadaListApp
 */
angular.module('tadaListApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

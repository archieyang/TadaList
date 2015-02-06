'use strict';

/**
 * @ngdoc function
 * @name tadaListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tadaListApp
 */
angular.module('tadaListApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
    $scope.addTodo = function () {
    	$scope.todos.push($scope.newTodo)
    	$scope.newTodo = '';
    };
    $scope.removeTodo = function(index) {
    	$scope.todos.splice(index, 1);
    };
  });

#angular is a global variable
rcMovable = angular.module('rcMovable', [])
PlaceDirective = require './directives/rc-place.coffee'
TransformService =  require './services/transformService.coffee'
#Create your app

rcMovable.directive "rcPlace" , () -> new PlaceDirective()
rcMovable.factory "transformService", ()->new TransformService();

rcMovable.controller "MainCtrl", ($scope, transformService) ->
  transformService.zoom(3)
  $scope.doStuff = () ->
    "scope is doing some work";






module.exports = rcMovable



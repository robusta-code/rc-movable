#angular is a global variable
PlaceDirective = require './directives/place-directive'

#Create your app
rcMovable = angular.module('rcMovable', [])
  .directive "rcPlace" , () ->
      new PlaceDirective()
  .controller "main", () ->




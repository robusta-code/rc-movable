#angular is a global variable
rcMovable = angular.module('rcMovable', [])
PlaceDirective = require './directives/place-directive.coffee'
TransformService =  require './services/transform-service.coffee'
#Create your app

rcMovable.directive "rcPlace" , () ->
      new PlaceDirective()
  .controller "main", () -> null




module.exports = rcMovable



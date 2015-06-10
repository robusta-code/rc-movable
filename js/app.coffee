#angular is a global variable
rcMovable = angular.module('rcMovable', [])
PlaceDirective = require './directives/rc-place.coffee'
TransformService =  require './services/transformService.coffee'
#Create your app

rcMovable.directive "rcPlace" , () -> new PlaceDirective()
rcMovable.factory "transformService", ()->new TransformService();

rcMovable.controller "main", ($scope, transformService) ->
  transformService.zoom(3)





module.exports = rcMovable



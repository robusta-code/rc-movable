service = new TranformService()
angular.module('rcMovable').factory("transformService", ()->service)


class TransformService
  zoom : (size)->
    console.log "zooming #{size}"
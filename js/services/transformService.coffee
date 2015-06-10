
#service = new TranformService()
#angular.module('rcMovable').factory("transformService", ()->service)


class TransformService
  constructor : () ->
    console.log("in the TransformService Constructor")
  zoom : (size)->
    console.log "zooming here to #{size}"


module.exports = TransformService
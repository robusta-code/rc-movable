
###
  The Directive contains a Viewport and a div for the Place/Map
  The initial element where rc-place is put become the Viewport
###
class PlaceDirective
  constructor: () ->
    # Constructor stuff
    #@controller = MyController
    #@controllerAs = 'ctrl'
  restrict: 'EA'
  replace: false
  scope:
    attributeStuff: '='
  template:"<div class='place' ng-transclude></div>"
  transclude: true
  link: (scope, element, attr) ->
    $elt=angular.element(element);
    $elt.addClass("rc-viewport")
    #$elt.html("watch this  evented  hello")


module.exports = PlaceDirective
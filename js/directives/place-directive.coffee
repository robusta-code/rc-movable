class PlaceDirective
  constructor: () ->
    # Constructor stuff
    #@controller = MyController
    #@controllerAs = 'ctrl'
  restrict: 'EA'
  replace: false
  scope:
    attributeStuff: '='
  link: (scope, element, attr) ->
    alert "yo the directive from Coffescript/Browserified class"
    angular.element(element).html("watch this  evented  hello")


module.exports = PlaceDirective
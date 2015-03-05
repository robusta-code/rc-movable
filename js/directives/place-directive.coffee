
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
    alert "yo the directive from Coffescript class"
    angular.element(element).html("hello")



module.exports = PlaceDirective
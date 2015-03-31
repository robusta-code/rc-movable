window.start = (html, cssFile) ->


  if (!html)
    html = """
      <div class ="capitole" rc-place>
        <div rc-element="first"> Hi there</div>
      </div>
    """


  #load the templates // if no template yet, it would cause a noModule error
  #beforeEach angular.mock.module "my.templates"

  beforeEach angular.mock.module 'rcMovable'

  #mock the controller for the same reason and include $rootScope and $controller
  beforeEach (inject ($compile, _$rootScope_)->


    $rootScope=_$rootScope_

    #create an empty scope
    $scope = $rootScope.$new();
    element = angular.element html

    #declare the controller and inject our empty scope
    # $controller('MainCtrl', {$scope: $scope});

    #adding css
    if (!cssFile)
      $("head").append("<link rel='stylesheet' href=\"/test/css /#{cssFile}\">");
    else
      $("head").append("<link rel='stylesheet' href=\"/test/css /place.css\">");


    $("body").html(element)
    element = $compile(element)($rootScope)
    $rootScope.$digest();

    viewport = $(".viewport")


    #TODO : best practice would be to use a Q ;
    window.viewport = $(".viewport")
    window.element = element
    window.$rootScope = $rootScope
    window.$scope = $scope
  )









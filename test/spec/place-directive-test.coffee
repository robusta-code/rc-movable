


'use strict';


###
element = startup.element;
$rootScope = startup.$rootScope;
viewport = startup.viewport;
###

describe 'As a map object, I', ->

  startup=start();

  it "must have a viewport", ->
    expect(viewport).not.toBeUndefined()

  it 'must be zoomable',  inject(['transformService', (service) ->
    map = viewport.find(".place")
    initialWidth= map.width()
    s = service.get()
    s.zoom(4)

    expect(map.width()).not.toBeLessThan (3.8 * map.width());
  ]);


###



  it 'should start with a Site1 element', () ->
      expect(viewport.find(".element[name='Site1']").length).toEqual(1);


  it 'should go down when I click on Site1', () ->
    viewport.find(".element[name='Site1']").click();

  $rootScope.$digest();

  expect (viewport.find(".element[name='Site1']").length).toEqual(0)

###







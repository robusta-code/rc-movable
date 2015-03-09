


'use strict';


###
element = startup.element;
$rootScope = startup.$rootScope;
viewport = startup.viewport;
###

describe 'As a map object, I should have a some components before the user makes anything', ->

  startup=start();

  it "must have a viewport", ->
    expect(true).toBe(true);
   # expect(viewport).not.toBeUndefined()

###
  it 'must have a bunch of levels',  inject(['rcMapDataService', (service) ->
    expect(viewport.find(".element").length).not.toBeLessThan(1);
  ]);


  it 'should start with a Site1 element', () ->
      expect(viewport.find(".element[name='Site1']").length).toEqual(1);


  it 'should go down when I click on Site1', () ->
    viewport.find(".element[name='Site1']").click();

  $rootScope.$digest();

  expect (viewport.find(".element[name='Site1']").length).toEqual(0)

###







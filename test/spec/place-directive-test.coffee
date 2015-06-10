'use strict';


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





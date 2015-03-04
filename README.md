rc-movable
====

High level Angular directives for element drag and drop in a transformable scene, mobile first.
The Touch events are using the light [Hammer.js](https://hammerjs.github.io/) dependency.


v 0.0.1 : simply DO NOT USE !!!!!
===

OK, I want to check for fun or contribute
====

## Install

Install with bower:

```bash
bower install rc-movable
```

Usage
===

Include ``rc-movable.js`` in your HTML


![](./doc/movable.png)

        <!-- create a Place where you can drag from -->
        <div dragable>

            <!-- create an element that will move inside the Place -->
            <div movable>...</div>

        </div>


## Single place Features

* The Place can scale, rotate and move (if set to transformable, or independantly movable, zoomable or *rotationable*)
* The Place can't move if not scaled in (with default option)


Exemple

        <!-- The Capitole can move, rotate and/or zoom in/out -->
        <div place="capitole" transformable>

        </div>

Exemple of only zoomable

        <!-- The Capitole can't move neither rotate but can zoom in (can't be smaller than inital size) -->
        <div place="capitole" zoomable="in">


        </div>


## Movable Element Feature

* The Element can move, but not rotate/scale (it would be awful for little elements)
* The Element has a 'moving' css class while moving
* The Element can go outside its place
* Places inside Places are not supported yet

        <!-- create a Place where you can drag from -->
        <div place>

            <!-- create an element that will move inside the Place -->
            <div movable="nolimit">...</div>

        </div>

An element needs a Place to move

        <!-- Without Place, the element may move, but no guarantee on anything -->
        <div movable>...</div>

## Drag and Drop Features

![](./doc/drag-n-drop.png)

* The element has a  'dragable' class if it's dragable (useful for gameboard)
* The initial Place has no css class when one of its element is being dragged
* The destination Place has a 'valid-drop' or 'invalid-drop' class based on the drop condition

## Design Patterns involved

* Each Element and Place have a State object that manages the dragable/dropable/moving status, and x,y position for Elements. This State is *watched* by Angular
* The dragable/dropable condition depends on the application state, the destination Place state and the dragged element. Thus it is managed by the ConditionMediator


        <!-- myMediator  will decide if the Element can move out of placeA and go in placeB -->
        <div place="placeA" draggable="myMediator">
            <div movable>....</div>
        </div>

        <div place="placeB" dropable="myMediator">

        </div>




## Contribute

RC-Movable is written in CoffeeScript.

Developments are made by the [Robusta Code](http://www.robusta.io) team (aka myself) and [M-ite](http://www.m-ite.com).
You are welcome to contribute. Start with a pull-request (with it's unit-test !) and you will probably be a committer.



## License

MIT Licensed

Copyright (c) 2014, **Nicolas Zozol** for **Robusta Code** <nz@robusta.io> and **Jean RAKOTOZAFY** for www.m-ite.com <jeanperlin@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

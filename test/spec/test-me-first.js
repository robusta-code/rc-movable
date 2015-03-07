/* global describe, it */

(function () {
    'use strict';

    var added = false;
    var element;
    var $rootScope;
    var $scope;//we'll use this scope in our tests
    var viewport;
    start();
    describe('As a map object, I should have a some components before the user makes anything', function () {


        it("must have a viewport", function(){
            console.log("Viewport : "+viewport)
            console.log("Viewport : "+expect(viewport))
            expect(viewport).not.toBeUndefined()
        });


        /*

        it('must have a bunch of levels',  inject(['rcMapDataService',
                function(rcMapDataService) {
                    // alert (element.html())
                    expect(viewport.find(".element").length).not.toBeLessThan(1);
                }]));



        it ('should start with a Site1 element', function(){
            expect(viewport.find(".element[name='Site1']").length).toEqual(1);
        })

       /*$ it ('should go down when I click on Site1', function(){
            viewport.find(".element[name='Site1']").click();

            $rootScope.$digest();
            expect(viewport.find(".element[name='Site1']").length).toEqual(0);
        })*/


    });




    function start() {
        //mock Application to allow us to inject our own dependencies

        beforeEach(function(){
            console.log("hello")
        })
       //

        // load the templates
       // beforeEach(angular.mock.module("my.templates"));

        beforeEach(angular.mock.module('rcMovable'));

        //mock the controller for the same reason and include $rootScope and $controller
        beforeEach(inject(function ($compile, _$rootScope_) {

            console.log("in")

            $rootScope=_$rootScope_;
            //create an empty scope
           // $scope = $rootScope.$new();
            element = angular.element('<div class ="capitole" rc-place>' +
                '<div rc-element="first"> Hi there</div></div>');

            //adding css
            if (!added){
                $("head").append('<link rel="stylesheet" href="/test/place.css">');
            }


            $("body").html(element)
            element = $compile(element)($rootScope)
            $rootScope.$digest();

            viewport = $(".viewport");

            //declare the controller and inject our empty scope
           // $controller('MainCtrl', {$scope: $scope});
        }));

    }
})();


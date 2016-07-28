/**
 * Created by david.moore on 7/28/2016.
 */
'use strict';

eventsApp.directive('greeting', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<button class="btn" ng-click="sayHello()">Say Hello</button>',
        controller: '@',
        name: 'ctrl'
    };
});

eventsApp.controller('GreetingController',
function GreetingController($scope){

        $scope.sayHello=function(){
            alert('hello');
        }
});
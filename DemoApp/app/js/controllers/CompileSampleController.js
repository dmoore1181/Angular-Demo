/**
 * Created by david.moore on 7/19/2016.
 */
'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse){
// YOU DO NOT WANT TO USE THE COMPILE SERVICE IN THIS WAY
        var fn = $parse('1 + 2');
        console.log(fn());

        $scope.appendDivToElement = function(markup){
            return $compile(markup) ($scope).appendTo(angular.element("#appendHere"));
        }
    }
);
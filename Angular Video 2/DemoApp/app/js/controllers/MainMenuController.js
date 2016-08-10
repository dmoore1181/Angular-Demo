/**
 * Created by david.moore on 7/27/2016.
 */
'use strict';
eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {
        $scope.createEvent = function () {
            $location.url('/newEvent');
        };
    });
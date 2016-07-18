'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log){
        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent();
            /*.success(function(event){ $scope.event = event;})
            .error(function(data,status, headers, config){
                $log.warn(data,status, headers(), config);
            });*/

        $scope.upVoteSession = function(session){
            session.upVoteCount ++;
        }

        $scope.downVoteSession = function(session){
            session.upVoteCount --;
        }
    }
);
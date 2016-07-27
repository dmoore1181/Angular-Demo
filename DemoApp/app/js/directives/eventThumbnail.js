/**
 * Created by david.moore on 7/27/2016.
 */
'use strict';

eventsApp.directive('eventThumbnail', function(){
    return{
        restrict:'E',
        replace: true,
        templateUrl: '/templates/directives/eventThumbnail.html',
        scope:{
            event: "="
        }
    }
});
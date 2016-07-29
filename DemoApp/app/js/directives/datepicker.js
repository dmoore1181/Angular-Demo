/**
 * Created by david.moore on 7/27/2016.
 */
'use strict';

eventsApp.directive('datePicker', function(){
    return{
        restrict:'A',
        link: function(scope, element){
            element.datepicker();
        }
    };
});

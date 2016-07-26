/**
 * Created by david.moore on 7/26/2016.
 */
'use strict';

eventsApp.factory('$exceptionHandler', function() {
    return function (exception) {
        console.log("exception handled: " + exception.message);
    };
});

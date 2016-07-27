/**
 * Created by david.moore on 7/14/2016.
 */
eventsApp.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});
    return {
        getEvent: function () {
            //return $http({method: 'GET', url: '/data/event/1'});
            return resource.get({id: 1});
        },
        save: function (event) {
            event.id = 9999;
            return resource.save(event);
        },
        getAllEvents: function(){
            return resource.query();
        }
    };
});
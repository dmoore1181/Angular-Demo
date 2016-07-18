/**
 * Created by david.moore on 7/14/2016.
 */
eventsApp.factory('eventData', function($resource){
    return{
        getEvent: function(){
            //return $http({method: 'GET', url: '/data/event/1'});
            return $resource('/data/event/:id', {id:'@id'}).get({id:1});
        }
    };
});
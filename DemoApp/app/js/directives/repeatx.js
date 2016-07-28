/**
 * Created by david.moore on 7/28/2016.
 */
eventsApp.directive('repeatX',function($compile){
    return {
        /*link: function(scope,element, attributes, controller){
            for (var i=0; i<Number(attributes.repeatX) - 1; i++){
                element.after($compile(element.clone().attr('repeat-x', 0))(scope));
            }
        }*/
        compile: function(element, attributes){
            for (var i=0; i<Number(attributes.repeatX) - 1; i++){
                element.after(element.clone().attr('repeat-x', 0));
            }
            return function(scope, element, attributes, controller){
                attributes.$observe('text', function(newValue){
                    if (newValue === 'Hello World'){
                        element.css('color', 'red');
                    }
                });
            }
        }
    };
});
'use strict';

eventsApp.directive('mySample', function($compile){
   return {
       restrict: 'E', //E for element and C for class and M for comment
       template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>"
       // link: function(scope, element, attrs, controller){
       //      var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
       //     angular.element(element).html($compile(markup)(scope));
       // }
   } ;
});
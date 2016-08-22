angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.messages = [];
    $scope.handlePause = function (e) {
        console.log(e);
        $scope.messages.push({ text: 'paused!' + new XDate().toString() });
        console.log('video was paused!');
    };
});

angular.module('app')
    .directive('spacebarSupport',
        function() {
            return{
                restrict: 'A',
                link: function(scope, element, attributes) {
                    $('body')
                        .on('keypress',
                            function(evt) {
                                var videoElement = element[0];
                                if (evt.keyCode === 32) {
                                    if (videoElement.paused) {
                                        videoElement.play();
                                    }
                                    else {
                                        videoElement.pause();
                                    }
                                }
                            });
                }
            }
        });

angular.module('app')
    .directive('eventPause',
        function($parse) {
            return{
                restrict: 'A',
                link: function (scope, element, attributes) {
                    var fn = $parse(attributes['eventPause']);
                    element.on('pause',
                        function(event) {
                            scope.$apply(function() {
                                fn(scope, {evt: event});
                            });
                        });
                }
            }
        });
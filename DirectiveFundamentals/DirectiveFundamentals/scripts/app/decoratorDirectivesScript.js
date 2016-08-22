angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.messages = [];
    $scope.handlePause = function (e) {
        console.log(e);
        $scope.messages.push({ text: 'paused!' + new XDate().toString() });
        console.log('video was paused!');
    };

    $scope.data = { message: 'I have not been clicked' };
    $scope.clickHandler = function(p) {
        p.message = 'I have been clicked';
    };

    $scope.user1 = {
        name: 'Luke',
        selected: false
    };
});

angular.module('app').directive('userClickSelect', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            element.on('click',
                function() {
                    scope.user.selected = !scope.user.selected;
                    scope.$apply()
                });
        }
    }
});

angular.module('app').directive('userTile', function() {
    return {
        restrict: 'E',
        scope: {
            user: '='
        },
        templateUrl: 'userTile.html'
    }
});

angular.module('app').directive('myClick', function($parse) {
    return {
        link: function(scope, el, attrs) {
            var fn = $parse(attrs['myClick']);
            el.on('click',
                function() {
                    scope.$apply(function() {
                        fn(scope);
                    });
                });
        }
    }
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
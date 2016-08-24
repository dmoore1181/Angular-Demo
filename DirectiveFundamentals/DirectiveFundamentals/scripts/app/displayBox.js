angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {
    $scope.message = 'this is a message';
    $scope.answers = { baseLocation: 'Yavin 4' };
});

angular.module('app').directive('displayBox', function () {
    return{
        restrict: 'E',
        templateUrl: 'displayBox.html',
        controller: function($scope) {
            $scope.hidden = false;
            $scope.close = function() {
                $scope.hidden = true;
            }
           
        },
        transclude: true,
        scope: true
    }
});

angular.module('app').directive('myQuestion', function () {
    return {
        restrict: 'E',
        templateUrl: 'myQuestion.html',
        transclude: true,
        scope: {
            questionText: '@q'
}
    }
});
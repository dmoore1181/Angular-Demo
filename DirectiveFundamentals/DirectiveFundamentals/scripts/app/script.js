angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.user1 = {
        name: 'Luke Skywalker',
        address: {
            street: 'PO Box 123',
            city: 'Secret Rebel Base',
            planet: 'Yavin 4'
        },
        friends: [
            'Han',
            'Leia',
            'Chewbacca'
        ]
    }

    $scope.user2 = {
        name: 'Han Solo',
        address: {
            street: 'PO Box 123',
            city: 'Mos Eisley',
            planet: 'Tattoine'
        },
        friends: [
            'Han',
            'Leia',
            'Chewbacca'
        ]
    }

});

angular.module('app').directive('userInfoCard',
        function() {
            return {
                restrict: 'E',
                templateUrl: 'userInfoCard.html',
                scope: {
                    user: '=',
                    initialCollapsed: '@collapsed'
                },
                controller: function ($scope) {
                    $scope.collapsed = ($scope.initialCollapsed === 'true');
                    $scope.knightMe = function(user) {
                        user.rank = 'knight';
                    };

                    $scope.collapse = function() {
                        $scope.collapsed = !$scope.collapsed;
                    };

                    $scope.removeFriend = function (friend) {
                        var index = $scope.user.friends.indexOf(friend);
                        if (index > -1) {
                            $scope.user.friends.splice(index, 1);
                        }
                    }
                }
            }
        });

angular.module('app')
    .directive('removeFriend',
        function() {
            return {
                restrict: 'E',
                templateUrl: 'removeFriend.html',
                scope: {
                    notifyParent: '&method'
                },
                controller: function($scope) {
                    $scope.removing = false;
                    $scope.startRemove = function() {
                        $scope.removing = true;
                    };
                    $scope.cancelRemove = function() {
                        $scope.removing = false;
                    };

                    $scope.confirmRemove = function() {
                        $scope.notifyParent();
                    };

                }
            }
        });

angular.module('app')
    .directive('address',
        function() {
            return {
                restrict: 'E',
                templateUrl: 'address.html',
                scope: true,
                controller: function($scope) {
                    $scope.collapsed = false;
                    $scope.collapseAddress = function() {
                        $scope.collapsed = true;
                    };
                    $scope.expandAddress = function() {
                        $scope.collapsed = false;
                    };
                }
            }
        });
(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(['$logProvider', '$routeProvider', function ($logProvider, $routeProvider) {

        $logProvider.debugEnabled(true);

        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'home',
                template: '<h1>This is an inline template</h1>'
            });

    }]);

}());
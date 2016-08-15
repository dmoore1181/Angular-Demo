(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(['$logProvider', '$routeProvider', function ($logProvider, $routeProvider) {

        $logProvider.debugEnabled(true);

        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'home',
                templateUrl: '/app/templates/home.html'
            })
            .when('/schools',{
                controller: 'AllSchoolsController',
                controllerAs: 'schools',
                templateUrl: '/app/templates/allSchools.html',
                caseInsensitiveMatch: true
            })
            .when('/classrooms',{
                controller: 'AllClassroomsController',
                controllerAs: 'classrooms',
                 templateUrl: '/app/templates/allClassrooms.html'
            })
            .when('/activities',{
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: '/app/templates/allActivities.html'
            })
            .when('/classrooms/:id',{
                templateUrl: '/app/templates/classroom.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom'
            })
            .otherwise('/')
        ;

    }]);

    app.run(['$rootScope', '$log', function($rootScope, $log){
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
            $log.debug('successfully changed routes');

            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);
        });

        $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
            $log.debug('error changing routes');

            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);
            $log.debug(rejection);
        })
    }]);

}());
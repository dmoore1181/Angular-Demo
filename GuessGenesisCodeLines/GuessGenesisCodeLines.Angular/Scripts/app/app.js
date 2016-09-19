(function() {
    'use strict';

    var app = angular.module('GuessWeightApp', ['ui.router', 'common.services']);

    app.config([
        '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            debugger;
            $stateProvider.state('home',
            {
                url: '/',
                templateUrl: 'Templates/Home.html',
                controller: 'AnswerListController as vm'
            });
        
        }

    ]);
}())
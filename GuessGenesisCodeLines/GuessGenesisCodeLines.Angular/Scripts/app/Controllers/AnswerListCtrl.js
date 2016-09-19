(function() {
    'use strict';

    angular.module('GuessWeightApp').controller('AnswerListController', ['answerResource', answerListController]);

    function answerListController(answerResource) {
        var vm = this;
        debugger;

        answerResource.query(function (data) {
            debugger;
            vm.userAnswers = data;
        });
    }
}());
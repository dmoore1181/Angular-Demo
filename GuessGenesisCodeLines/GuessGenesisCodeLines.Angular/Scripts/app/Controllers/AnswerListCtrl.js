(function() {
    'use strict';

    angular.module('GuessWeightApp').controller('AnswerListController', ['answerResource', '$resource', '$state', answerListController]);

    function answerListController(answerResource, $resource, $state) {
        var vm = this;

        answerResource.query(function (data) {
            vm.userAnswers = data;
        });

        vm.SubmitEntry = function () {
            var Guess = $resource('http://localhost/GuessGenesisCodeLines.API/api/UserAnswers/:id',
 { UserName: '@userName', answer: '@answer' }, {
 });
            var newGuess = new Guess();
            newGuess.UserName = vm.guess.name;
            newGuess.answer = vm.guess.answer;
            newGuess.$save()
                .then(function() {
                    $state.reload();
                    toastr.success('Save Successful');
                })
                .catch(function () {
                    $state.reload();
                    toastr.error('Save Failed. Only 1 entry per person.');
                });
        };
        vm.showPasswordEntry = false;

        vm.DisplayWinner = function () {
            debugger;
            vm.showPasswordEntry = true;
        };

        vm.SubmitPassword = function () {
            debugger;
            if (vm.password === 'clssql') {
                $state.go('Winner');
            }
            else {
                toastr.error('Access Denied!!!!!');
            }
        };

    }
}());
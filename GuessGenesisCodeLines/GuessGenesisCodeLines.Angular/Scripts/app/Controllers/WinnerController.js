(function() {
    'use strict';

    angular.module('GuessWeightApp').controller('WinnerController', ['$resource', answerListController]);

    function answerListController($resource) {
        var winner = this;
        var winnnerResourceType = $resource('http://localhost/GuessGenesisCodeLines.API/api/GetAnswer');
        var newWinner = new winnnerResourceType();
        newWinner.$get()
            .then(function(data) {
                debugger;
                winner.name = data.UserName;
                winner.guess = data.answer;
            })
            .catch(function() {
                debugger;
                toastr.error('Save Failed. Only 1 entry per person.');
            });
    }
}());
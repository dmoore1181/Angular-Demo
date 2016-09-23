(function() {
    'use strict';

    angular.module('common.services').factory('answerResource', ['$resource', answerResource]);

    function answerResource($resource) {
        return $resource('http://localhost/GuessGenesisCodeLines.API/api/UserAnswers/:id');
    }
}());
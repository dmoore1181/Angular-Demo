(function() {
    'use strict';

    angular.module('common.services').factory('winnerResource', ['$resource', winnerResource]);

    function winnerResource($resource) {
        return $resource('http://localhost/GuessGenesisCodeLines.API/api/GetAnswer');
    }
}());
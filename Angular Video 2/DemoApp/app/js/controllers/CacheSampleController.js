/**
 * Created by david.moore on 7/19/2016.
 */
'use strict';

eventsApp.controller('CacheSampleController',
    function CacheSampleController ($scope, myCache) {
        $scope.addToCache = function (key, value) {
            myCache.put(key, value);
        };

        $scope.readFromCache = function (key) {
            return myCache.get(key);
        }

        $scope.getCacheStatus = function () {
            return myCache.info();
        }
    });
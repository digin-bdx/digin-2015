'use strict';

/**
 * @ngdoc function
 * @name digin.controller:ComingSoonCtrl
 *
 * @param {Object} $scope
 * @param {Object} $http
 * @param {Object} $log
 */
angular.module('digin')
    .controller('ComingSoonCtrl', function ($scope, $http, $log) {

        $scope.consummers = {};

        $http.get('dummy/consummers.json').success(function(data){
            $scope.consummers = data.consummers;
            $log.info($scope.consummers);
        });

    });

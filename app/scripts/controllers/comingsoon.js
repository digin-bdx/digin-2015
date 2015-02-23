'use strict';

/**
 * @ngdoc function
 * @name digin.controller:ComingSoonCtrl
 *
 * @param {Object} $scope
 * @param {Object} $http
 */
angular.module('digin')
    .controller('ComingSoonCtrl', function ($scope, $http) {

        $scope.consummers = {};

        $http.get('dummy/consummers.json').success(function(data){
            $scope.consummers = data.consummers;
        });

    });

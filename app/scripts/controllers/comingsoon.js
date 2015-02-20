'use strict';

/**
 * @ngdoc function
 * @name siteRebootApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the digin app
 */
angular.module('digin')
    .controller('ComingSoonCtrl', function ($scope, $http, $document) {

        $scope.consummers = {};
        $scope.scrolled = true;

        $http.get('dummy/consummers.json').success(function(data){
            $scope.consummers = data.consummers;
            console.log($scope.consummers);
        });

    });

'use strict';

/**
 * @ngdoc overview
 * @name siteRebootApp
 * @description
 * # siteRebootApp
 *
 * Main module of the application.
 */
angular
    .module('digin', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angular-preload-image'
    ])
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', { templateUrl: 'views/comingsoon.html', controller: 'ComingSoonCtrl' })
            .when('/about', { templateUrl: 'views/about.html', controller: 'AboutCtrl' })
            .otherwise({ redirectTo: '/' });

        if(window.history && window.history.pushState)
            $locationProvider.html5Mode(true);
    });

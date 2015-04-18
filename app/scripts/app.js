'use strict';

/**
 * @ngdoc overview
 * @name yomanApp
 * @description
 * # yomanApp
 *
 * Main module of the application.
 */
angular
  .module('yomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/issues', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl'
      })
      .when('/accordeon', {
        templateUrl: 'views/accordeon.html',
        controller: 'IssuesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

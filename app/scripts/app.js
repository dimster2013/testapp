'use strict';

angular
  .module('vodaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/richlist', {
        templateUrl: 'views/richlist.html',
        controller: 'RichListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).
  constant('_',window._);

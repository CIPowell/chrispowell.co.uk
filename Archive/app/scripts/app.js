import angular from 'angular';
import ngRoute from 'angular-route';
import Auth0Lock from 'auth0-lock';
import angularJwt from 'angular-jwt';
import angularLock from 'angular-lock';

window.Auth0Lock = Auth0Lock;

require('../assets/fonts/fontawesome-webfont.eot');
require('../assets/fonts/fontawesome-webfont.svg');
require('../assets/fonts/fontawesome-webfont.ttf');
require('../assets/fonts/fontawesome-webfont.woff');
require('../assets/fonts/fontawesome-webfont.woff2');

require('../style/chrisipowell.scss');

function Router($locationProvider, $routeProvider, lockProvider, jwtOptionsProvider) {
    lockProvider.init({
      clientID: 'RRZMw2738fbIeVhtKnUqRnx8YFL1E4HU',
      domain: 'chrisipowell.eu.auth0.com'
    });

    jwtOptionsProvider.config({
        tokenGetter: function () {
            return localStorage.getItem('id_token');
        }
    });

    $routeProvider.when('/', {
        template:'<home></home>'
    })
    .when('/blog', {
      template: '<blog></blog>'
    })
    .when('/admin', {
        template: '<admin></admin>'
    });
}

function run($rootScope, authService, lock, authManager) {
    $rootScope.authService = authService;

    authManager.checkAuthOnRefresh();

    authService.registerAuthenticationListener();

    lock.interceptHash();
}

run.$inject = ['$rootScope', 'authService', 'lock', 'authManager'];

var cip = angular.module('cip', ['auth0.lock', 'angular-jwt','ngRoute']);

require('./views/blog/controller.js');
require('./views/admin/controller.js');
require('./views/home/controller.js');
require('./services/auth.js');

cip.config(['$locationProvider', '$routeProvider', 'lockProvider', 'jwtOptionsProvider', Router]);
cip.run(run);

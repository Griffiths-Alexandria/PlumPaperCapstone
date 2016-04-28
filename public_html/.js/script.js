/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('plumApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })
            .when('/products', {
                templateUrl: 'http://support.plumpaper.com/customer/portal/emails/new',
                controller: 'mainController'
            }).when('/addons', {
                templateUrl: 'http://support.plumpaper.com/customer/portal/emails/new',
                controller: 'mainController'
            })
            .when('/shop', {
                templateUrl: 'http://support.plumpaper.com/customer/portal/emails/new',
                controller: 'mainController'
            })
            .when('/support', {
                templateUrl: 'http://support.plumpaper.com/customer/portal/emails/new',
                controller: 'mainController'
            })
            .when('/about', {
                templateUrl: 'http://support.plumpaper.com/customer/portal/emails/new',
                controller: 'mainController'
            });
});

app.controller('mainController', function ($scope) {
    $scope.message = "Hello, Please Work";
});


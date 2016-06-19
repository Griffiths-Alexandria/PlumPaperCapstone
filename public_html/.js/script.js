/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('plumApp', ['ngRoute']);

app.controller('mainController', function ($scope) {
    $scope.message = 'hello, love.';

});


$('.carousel').carousel({
    interval: 300,
    pause: false,
    wrap: true
})
        .on('click', '.carousel-control', handle_nav);

var handle_nav = function (e) {
    e.preventDefault();
    var nav = $(this);
    nav.parents('.carousel').carousel(nav.data('slide'));
}


app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })
            .when('/index', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })
            .when('/products', {
                templateUrl: 'pages/productlanding.html',
                controller: 'mainController'
            })
            .when('/product', {
                templateUrl: 'pages/products.html',
                controller: 'mainController'
            })
            .when('/addons', {
                templateUrl: 'pages/addons.html',
                controller: 'mainController'
            })
            .when('/shop', {
                templateUrl: 'pages/shop.html',
                controller: 'mainController'
            })
            .when('/support', {
                templateUrl: 'http://support.plumpaper.com/customer/portal/emails/new',
                controller: 'mainController'
            })
            .when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'mainController'
            })
            .when('/other', {
                templateUrl: 'pages/others.html',
                controller: 'mainController'
            })
            .when('/notebooks', {
                templateUrl: 'pages/notebooks.html',
                controller: 'mainController'
            })
            .when('/build', {
                templateUrl: 'pages/buildplanner.html',
                controller: 'mainController'
            });


});

$('.collapse').collapse()


var CarouselOption1 = function ($scope) {
    $scope.myInterval = 3000;
    $scope.slides = [
        {image: 'images/shopcarousel/OPTION1.png'},
        {image: 'images/shopcarousel/year.png'},
        {image: 'images/shopcarousel/monthly.png'},
        {image: 'images/shopcarousel/specialdates.png'},
        {image: 'images/shopcarousel/passwords_1.png'},
        {image: 'images/shopcarousel/holidays_1.png'},
        {image: 'images/shopcarousel/pocket_1.png'},
        {image: 'images/shopcarousel/tabs_1.png'},
        {image: 'images/shopcarousel/clearcover.png'}
    ];

};
/*
 var subApp = angular.module('subApp', ['ngRoute']); 
 
 subApp.app.config(function ($routeProvider) {
 $routeProvider 
 
 });
 
 */

function loadDocAddOns() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/notes.html", true);
    xhttp.send();
}

function loadDocadd() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/mealplanning.html", true);
    xhttp.send();
}

function loadDoc2add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/budgetplanning.html", true);
    xhttp.send();
}

function loadDoc3add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/myhome.html", true);
    xhttp.send();
}
function loadDoc4add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/fitness.html", true);
    xhttp.send();
}
function loadDoc5add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/blog.html", true);
    xhttp.send();
}
function loadDoc6add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/directsales.html", true);
    xhttp.send();
}
function loadDoc7add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/baby.html", true);
    xhttp.send();
}
function loadDoc8add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/wedding.html", true);
    xhttp.send();
}
function loadDoc9add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/myclass.html", true);
    xhttp.send();
}
function loadDoc10add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/notes.html", true);
    xhttp.send();
}
function loadDoc11add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/todo.html", true);
    xhttp.send();
}
function loadDoc12add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/billtracker.html", true);
    xhttp.send();
}
function loadDoc13add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/cleaning.html", true);
    xhttp.send();
}
function loadDoc14add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/checklist.html", true);
    xhttp.send();
}
function loadDoc15add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/contact.html", true);
    xhttp.send();
}
function loadDoc16add() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("demo2").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "pages/addons/stickers.html", true);
    xhttp.send();
}



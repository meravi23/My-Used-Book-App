var app = angular.module("usedBookApp", ["ngRoute", "ngAnimate", "ngTouch", "ui.bootstrap"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/homeUsedSearch.html",
            controller: "usedBookSearchCtrl"
        }).when("/board", {
            templateUrl: "app/searchBoard/searchBoard.html",
            controller: "searchPostCtrl"
        }).when("/manage", {
            templateUrl: "app/store/manageStore.html",
            controller: "storeCtrl"
        }).when("/login", {
            templateUrl: "app/login/login.html",
            controller: "loginCtrl"
        }).when("/store", {
            templateUrl: "app/store/manageStore.html",
            controller: "storeCtrl"
        }).when("/signup", {
            templateUrl: "app/signup/signupUserOrSeller.html",
        }).when("/signupShop", {
            templateUrl: "app/signup/signupShop.html",
            controller: "signupCtrl"
        }).when("/signupUser", {
            templateUrl: "app/signup/signupUser.html",
            controller: "signupCtrl"
        })
})
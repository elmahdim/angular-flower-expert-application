/*!
 * ng-flowers v1.0.0 (http://elmahdim.com/demo/Angular-Flower-Expert-App)
 * 
 * Licensed under MIT ( link )
 */
 
"use strict";
 
(function(){

var app = angular.module('flowerDirectives', []);

	app.directive('navBar', function(){
		return {
			restrict: 'A', 
			templateUrl: 'partials/navbar.html'
		};
	});

	app.directive('appName', function(){
		return {
			restrict: 'E', 
			templateUrl: 'partials/app-name.html'
		};
	});

})();
/*!
 * ng-flowers v1.0.0 (http://elmahdim.com/demo/Angular-Flower-Expert-App)
 * 
 * Licensed under MIT ( link )
 */

"use strict";
 
(function(){
	var app = angular.module('flowerApp', []);
	
	var app = angular.module('flowerApp', [
	  'ngRoute'
	  , 'ngSanitize'
	  ,'flowerCtrls'
	  ,'flowerDirectives'
	]);
	
	app.config(['$routeProvider',
	  function($routeProvider) {
		$routeProvider
		.when('/home', {
			title: '~ Angular Flower Expert Application ~'
			,templateUrl: 'partials/index.html'
		  })
		.when('/flowers', {
			title: 'Flowers List'
			,templateUrl: 'partials/flower-list.html'
			,controller : 'flowerListCtrl'
		  })
		.when('/flowers/:flowerId', {
			templateUrl: 'partials/flower-detail.html'
			,controller : 'flowerDetailCtrl'
		  })
		.otherwise({
			redirectTo: '/home'
		  });
	  }]);

	app.run(['$location', '$rootScope', function($location, $rootScope) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			$rootScope.title = current.$$route.title;
		});
	}]); 

})();
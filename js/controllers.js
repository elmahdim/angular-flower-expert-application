/*!
 * ng-flowers v1.0.0 (http://elmahdim.com/demo/Angular-Flower-Expert-App)
 * 
 * Licensed under MIT ( link )
 */
 
"use strict";
 
(function(){
	var app = angular.module('flowerCtrls', []);
	  
     app.controller('flowerListCtrl', ['$http', '$scope', function($http, $scope){
        $scope.flowers = [];

        $http.get('data/flowers.json').success(function(data) {
            $scope.flowers = data;
        });
		
		 $scope.totalFlowers = function(){
			return $scope.flowers.length;
		};
    }]);
	
    app.controller('flowerDetailCtrl', ['$http', '$scope', '$routeParams', function($http, $scope,$routeParams){
        $scope.flowers = [];
        $http.get('data/' + $routeParams.flowerId + '.json').success(function(data) { 
            $scope.flowers = data;
        });
    }]); 
})();
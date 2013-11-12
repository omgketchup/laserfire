console.log("App started, about to initialize Angular");

var laser = angular.module("LASER", ["firebase"]);

console.log("Initialized AngularJS as laser.");

laser.controller("EquipmentCtrl", ['$scope', 'angularFire',
	function EquipmentCtrl($scope, angularFire){
		var ref = new Firebase('https://laser.firebaseio.com/equipment');
		$scope.equipLimit = 25;
		$scope.equipment = [];
		var equipPromise = angularFire(ref, $scope, 'equipment');
		ref.once("value", function(childSnapshot){
			var kid = childSnapshot;
		});
	}]);

laser.controller("CategoryCtrl", ['$scope', 'angularFire',
	function CategoryCtrl($scope, angularFire){
		var ref = new Firebase('https://laser.firebaseio.com/categories');
		$scope.categories = [];
		var catPromise = angularFire(ref, $scope, 'categories');
	}]);
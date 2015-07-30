'use strict';
var mySignUp = angular.module('signUpModule',[]);
mySignUp.controller('signUpController', ['$scope', function($scope) {
	$scope.message ='';
	$scope.contacts = [];
	$scope.visbility = false;
	$scope.addUser = function(){
		$scope.contacts.push({
			name: $scope.name,
			username: $scope.userName,
			email: $scope.email
		});
		$scope.message = 'Thanks, ' + $scope.name + ' , we added you!';
		$scope.visbility = true;
		$scope.name='';
		$scope.userName='';
		$scope.email='';
	};
	$scope.logOut = function(){
		$scope.visbility = false;
	};
}]);
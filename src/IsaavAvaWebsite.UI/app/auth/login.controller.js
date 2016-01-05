(function () {
	'use strict';
	angular
		.module("app")
		.controller('LoginController', LoginController);

	LoginController.$inject = ['$scope', '$location', 'AuthService'];

	function LoginController($scope, $location, authService) {

		$scope.loginData = {
			userName: "",
			password: ""
		};

		$scope.message = "";

		$scope.login = function () {
			authService.login($scope.loginData).then(function (response) {
				$location.path('/admin');
			},
			function (err) {
				$scope.message = err.error_description;
			});
		};
	}
})();
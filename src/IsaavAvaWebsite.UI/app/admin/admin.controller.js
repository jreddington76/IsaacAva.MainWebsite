(function () {
	"use strict";

	angular
		.module("app")
		.controller("AdminController", AdminController);

	AdminController.$inject = ["AdminService"];

	function AdminController(adminService) {
		var vm = this;

		vm.categories = [];

		activate();

		function activate() {
			adminService.getCategories()
				.then(function (response) {
					vm.categories = response.data;
				});
		}
	}
})();
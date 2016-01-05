(function() {
	"use strict";
	angular
		.module("app")
		.service("AdminService", AdminService);

	AdminService.$inject = ["$http"];

	function AdminService($http) {
		this.getCategories = getCategories;
		this.getCategory = getCategory;

		function getCategories() {
			return $http.get("/api/categories");
		}

		function getCategory(categoryId) {
			return $http.get("/api/categories/" + categoryId);
		}
	}
})();
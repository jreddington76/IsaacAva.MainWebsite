(function () {
	"use strict";

	angular
		.module("app")
		.controller("HomeController", HomeController);

	HomeController.$inject = ["HomeService"];

	function HomeController(homeService) {
		var vm = this;

		vm.myInterval = 3000;
		vm.slides = [];

		activate();

		function activate() {
			homeService.getImages()
				.then(function (data) {
					vm.slides = data;
				});
		}

		//api
		//function activate() {
		//	homeService.getImages()
		//		.then(function (response) {
		//			vm.slides = response.data;
		//		});
		//}
	}
})();
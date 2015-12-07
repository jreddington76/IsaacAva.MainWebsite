(function() {
	"use strict";

	angular
		.module("app")
		.controller("ItemController", ItemController);

	ItemController.$inject = ["$routeParams", "ItemService"];

	function ItemController($routeParams, itemService) {
		var vm = this;

		vm.item = [];
		vm.index = 0;
		vm.changeImage = changeImage;

		activate();

		function activate() {

			itemService.getData($routeParams.itemId)
				.then(function(data) {
					vm.item = data;
				});
		}

		function changeImage(currentIndex) {
			vm.index = currentIndex;
		}
	}
})();
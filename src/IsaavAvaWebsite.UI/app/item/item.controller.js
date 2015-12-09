(function() {
	"use strict";

	angular
		.module("app")
		.controller("ItemController", ItemController);

	ItemController.$inject = ["$routeParams", "ItemService", "ThumbnailService"];

	function ItemController($routeParams, itemService, thumbnailService) {
		var vm = this;

		vm.item = [];
		vm.thumbnails = [];
		vm.index = 0;
		vm.changeImage = changeImage;

		activate();

		function activate() {

			itemService.getData($routeParams.itemId)
				.then(function(data) {
					vm.item = data;
				});

			thumbnailService.getThumbnails()
				.then(function (data) {
					vm.thumbnails = data;
				});
		}

		// api 
		//function activate() {
		//	itemService.getData($routeParams.itemId)
		//		.then(function (response) {
		//			vm.products = response.data;
		//		});

		//	thumbnailService.getThumbnails()
		//		.then(function (response) {
		//			vm.thumbnails = response.data;
		//		});
		//}

		function changeImage(currentIndex) {
			vm.index = currentIndex;
		}
	}
})();
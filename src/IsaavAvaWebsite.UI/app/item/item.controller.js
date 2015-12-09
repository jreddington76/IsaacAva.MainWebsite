(function() {
	"use strict";

	angular
		.module("app")
		.controller("ItemController", ItemController);

	ItemController.$inject = ["$routeParams", "ItemService", "ThumbnailService"];

	function ItemController($routeParams, itemService, thumbnailService) {
		var vm = this;

		vm.product = [];
		vm.thumbnails = [];
		vm.index = 0;
		vm.changeImage = changeImage;

		activate();

		function activate() {

			itemService.getProduct($routeParams.productId)
				.then(function(data) {
					vm.product = data;
				});

			thumbnailService.getThumbnails()
				.then(function (data) {
					vm.thumbnails = data;
				});
		}

		// api 
		//function activate() {
		//	itemService.getProduct($routeParams.productId)
		//		.then(function (response) {
		//			vm.product = response.data;
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
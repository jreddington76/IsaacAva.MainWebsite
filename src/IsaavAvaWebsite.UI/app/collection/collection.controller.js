(function() {
	"use strict";

	angular
		.module("app")
		.controller("CollectionController", CollectionController);

	CollectionController.$inject = ["CollectionService","ThumbnailService"];

	function CollectionController(collectionService, thumbnailService) {
		var vm = this;

		vm.products = [];
		vm.thumbnails = [];

		activate();

		function activate() {
			collectionService.getProducts()
				.then(function(data) {
					vm.products = data;
				});

			thumbnailService.getThumbnails()
				.then(function (data) {
					vm.thumbnails = data;
				});
		}

		// api 
		//function activate() {
		//	collectionService.getProducts()
		//		.then(function (response) {
		//			vm.products = response.data;
		//		});

		//	thumbnailService.getThumbnails()
		//		.then(function (response) {
		//			vm.thumbnails = response.data;
		//		});
		//}
	}
})();
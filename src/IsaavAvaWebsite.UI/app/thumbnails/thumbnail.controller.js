(function() {
	"use strict";

	angular
		.module("app")
		.controller("ThumbnailController", ThumbnailController);

	ThumbnailController.$inject = ["ThumbnailService"];

	function ThumbnailController(thumbnailService) {
		var vm1 = this;

		vm1.thumbnails = [];

		activate();

		function activate() {
		    thumbnailService.getData()
				.then(function(data) {
				    vm1.thumbnails = data;
				});
		}
	}
})();
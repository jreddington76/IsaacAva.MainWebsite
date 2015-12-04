(function () {
	'use strict';

	angular
        .module('app')
        .controller('CollectionController', CollectionController);

	CollectionController.$inject = ['CollectionService'];

	function CollectionController(collectionService) {
		var vm = this;

		vm.collection = [];

		activate();

		function activate() {
			collectionService.getData()
				.then(function (data) {
					vm.collection = data;
				});
		}
	}
})();
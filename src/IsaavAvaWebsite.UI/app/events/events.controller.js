(function() {
	"use strict";

	angular
		.module("app")
		.controller("EventsController", EventsController);

	EventsController.$inject = ["EventsService"];

	function EventsController(eventsService) {
		var vm = this;

		vm.events = [];

		activate();

		function activate() {

			eventsService.getData()
				.then(function(data) {
					vm.events = data;
				});
		}
	}
})();
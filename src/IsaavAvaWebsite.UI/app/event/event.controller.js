(function() {
	"use strict";

	angular
		.module("app")
		.controller("EventController", EventController);

	EventController.$inject = ["$routeParams", "EventService"];

	function EventController($routeParams, eventService) {
		var vm = this;

		vm.details = [];

		activate();

		function activate() {

			eventService.getData($routeParams.eventId)
				.then(function(data) {
					vm.details = data;
				});
		}
	}
})();
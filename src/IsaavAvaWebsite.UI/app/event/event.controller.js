(function() {
	"use strict";

	angular
		.module("app")
		.controller("EventController", EventController);

	EventController.$inject = ["$routeParams", "EventService"];

	function EventController($routeParams, eventService) {
		var vm = this;

		vm.event = [];

		activate();

		function activate() {
			eventService.getEvent($routeParams.eventId)
				.then(function(data) {
					vm.event = data;
				});
		}

		// api 
		//function activate() {
		//	eventService.getEvent($routeParams.eventId)
		//		.then(function (response) {
		//			vm.event = response.data;
		//		});
		//}
	}
})();
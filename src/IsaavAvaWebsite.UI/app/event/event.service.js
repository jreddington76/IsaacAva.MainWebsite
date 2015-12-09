(function() {
	"use strict";
	angular
		.module("app")
		.service("EventService", EventService);

	// todo - $q and $timeout can be removed when Web API used
	EventService.$inject = ["$http", "$q", "$timeout"];

	function EventService($http, $q, $timeout) {
		this.getEvent = getEvent;

		//function getEvent(eventId) {
		//	return $http.get("/api/events/" + eventId);
		//}

		// return a promise (like what $http returns)
		function getEvent(eventId) {
			var deferred = $q.defer();

			$timeout(function() {
				deferred.resolve({
					name: "Event " + eventId,
					images: [
						{ src: "app/assets/images/isaac_ava_homepage_" + eventId + ".jpg" }
					]
				});
			}, 500);

			return deferred.promise;
		};
	}
})();
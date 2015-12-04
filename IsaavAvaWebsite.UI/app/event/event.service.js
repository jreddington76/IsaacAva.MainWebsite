(function () {
	'use strict';
	angular
		.module('app')
		.service('EventService', EventService);

	// $q and $timeout can be removed when Web API used
	EventService.$inject = ['$http', '$q', '$timeout'];

	function EventService($http, $q, $timeout) {
		this.getData = getData;

		// return a promise (like what $http returns)
		function getData(eventId) {
			var deferred = $q.defer();

			$timeout(function () {
				deferred.resolve({
					name: 'Event 1',
					images: [
                        { src: 'app/assets/images/isaac_ava_homepage_' + eventId + '.jpg' }
					]
				});
			}, 500);

			return deferred.promise;
		};


		//function getData(exerciseId) {
		//    return $http.get("http://localhost:51029/api/exercisestep/" + exerciseId);
		//}
	}
})();
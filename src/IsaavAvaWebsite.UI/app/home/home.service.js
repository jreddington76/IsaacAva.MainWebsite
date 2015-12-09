(function () {
	"use strict";
	angular
		.module("app")
		.service("HomeService", HomeService);

	// todo - $q and $timeout can be removed when Web API used
	HomeService.$inject = ["$http", "$q", "$timeout"];

	function HomeService($http, $q, $timeout) {
		this.getImages = getImages;

		//function getImages() {
		//	return $http.get("/api/home");
		//}

		// return a promise (like what $http returns)
		function getImages() {
			var deferred = $q.defer();

			$timeout(function () {
				deferred.resolve(
					[
						{
							image: "app/assets/images/homepage/homepage_carousel_a.jpg"
						},
						{
							image: "app/assets/images/homepage/homepage_carousel_b.jpg"
						},
						{
							image: "app/assets/images/homepage/homepage_carousel_c.jpg"
						},
						{
							image: "app/assets/images/collections/Black Swing Dress/isaac_ava_black_swing_dress_1.jpg"
						},
						{
							image: "app/assets/images/collections/Black and White Short Set/isaac_ava_black_dogtooth_short_set_editorial_shot.jpg"
						},
						{
							image: "app/assets/images/collections/Black Relaxed Jacket/isaac_ava_black_relaxed_3.jpg"
						}
					]
				);
			}, 500);

			return deferred.promise;
		}
	}
})();
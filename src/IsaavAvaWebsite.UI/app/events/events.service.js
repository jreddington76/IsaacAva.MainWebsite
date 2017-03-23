(function() {
	"use strict";
	angular
		.module("app")
		.service("EventsService", EventsService);

	// todo - $q and $timeout can be removed when Web API used
	EventsService.$inject = ["$http", "$q", "$timeout"];

	function EventsService($http, $q, $timeout) {
		this.getEvents = getEvents;

		//function getEvents(eventId) {
		//	return $http.get("/api/events");
		//}

		// return a promise (like what $http returns)
		function getEvents() {
			var deferred = $q.defer();

			$timeout(function() {
				deferred.resolve([
					{
						id: "1",
						image: "app/assets/images/events/1_Brighton_Fashion_Week.jpg",
						alt: "Brighton Fashion Week 2015",
						copy: "<p>16th October 2015<br/><strong>Brighton Fashion Week</strong><br/>Zeitgeist Show</p>",
						link: "http://www.brightonfashionweek.com/isaac-ava/"
					},
					{
						id: "2",
						image: "app/assets/images/events/2_Liverpool_Fashion_Week.jpg",
						alt: "Liverpool Fashion Week 2015",
						copy: "<p>12th October 2015<br/><strong>Liverpool Fashion Week</strong><br/>Opening Night (Finale)</p>",
						link: "http://www.liverpoolfashionweek.co.uk/schedule-of-shows.html"
					},
					{
						id: "3",
						image: "app/assets/images/events/3_Battle_of_the_fashion_designers.jpg",
						alt: "Battle of the Fashion Designers 2015",
						copy: "<p>9th October 2015<br/><strong>Battle of the Fashion Designers</strong><br/>WINNER</p>",
						link: "http://www.eventbrite.co.uk/e/textile-fever-fashion-show-tickets-18704211801"
					},
					{
						id: "4",
						image: "app/assets/images/events/4_White_Cloth_Gallery_Fashion_Show_and_Art_Event.jpg",
						alt: "KA Designs and Ink On Cotton Fashion and Art Event 2015",
						copy: "<p>11th September 2015<br/><strong>Fashion and Art Event</strong></p>",
						link: "http://www.whiteclothgallery.com/event/"
					}
				]);
			}, 500);

			return deferred.promise;
		};
	}
})();
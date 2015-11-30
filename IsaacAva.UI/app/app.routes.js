(function () {
	"use strict";

	angular
		.module("app")
		.config([
			"$routeProvider",
			function ($routeProvider) {
				$routeProvider
					.when("/", {
						controller: "HomeController",
						templateUrl: "app/home/home.html",
						controllerAs: "vm"
					})
					.when("/collection", {
						controller: "CollectionController",
						templateUrl: "app/collection/collection.html",
						controllerAs: "vm"
					})
					.when("/collection/:itemId", {
						controller: "ItemController",
						templateUrl: "app/item/item.html",
						controllerAs: "vm"
					})
                    .when("/lookbook", {
                    	templateUrl: "app/lookbook/lookbook.html"
                    })
                    .when("/story", {
                    	templateUrl: "app/story/story.html"
                    })
                    .when("/journal", {
                    	templateUrl: "app/journal/journal.html"
                    })
                    .when("/events", {
                    	controller: "EventsController",
                    	templateUrl: "app/events/events.html",
                    	controllerAs: "vm"
                    })
                     .when("/events/:eventId", {
                     	controller: "EventController",
                     	templateUrl: "app/event/event.html",
                     	controllerAs: "vm"
                     })
                    .when("/press", {
                    	templateUrl: "app/press/press.html"
                    })
                    .when("/contact", {
                    	templateUrl: "app/contact/contact.html"
                    })
					.otherwise("/");
			}
		]);
})();
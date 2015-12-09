(function() {
	"use strict";
	angular
		.module("app")
		.service("CollectionService", CollectionService);

	// todo - $q and $timeout can be removed when Web API used
	CollectionService.$inject = ["$http", "$q", "$timeout"];

	function CollectionService($http, $q, $timeout) {
		this.getThumbnails = getThumbnails;
		this.getProducts = getProducts;

		//function getProducts() {
		//	return $http.get("/api/products");
		//}

		//function getThumbnails() {
		//	return $http.get("/api/thumbnails");
		//}

		// return a promise (like what $http returns)
		function getProducts() {
			var deferred = $q.defer();

			$timeout(function() {
				deferred.resolve(
					[
						{
							id: "1",
							name: "Black Swing Dress - £65",
							src: "app/assets/images/collections/Black Swing Dress/isaac_ava_black_swing_dress_1.jpg",
							alt: "Black Swing Dress"
						},
						{
							id: "2",
							name: "Blue Swing Dress - £65",
							src: "app/assets/images/collections/Blue Swing Dress/isaac_ava_blue_swing_dress_3.jpg",
							alt: "Blue Swing Dress"
						},
						{
							id: "3",
							name: "White Jumpsuit - £85",
							src: "app/assets/images/collections/White Jumpsuit/isaac_ava_white_jumpsuit_3.jpg",
							alt: "White Jumpsuit"
						},
						{
							id: "4",
							name: "Blue Jumpsuit - £85",
							src: "app/assets/images/collections/Blue Jumpsuit/Isaac_Ava_Blue_Jumpsuit_Front_2.jpg",
							alt: "Blue Jumpsuit"
						},
						{
							id: "5",
							name: "Grey Swing Dress - £45",
							src: "app/assets/images/collections/Grey Swing Dress/Isaac_Ava_Grey_Swing_Dress_Front.jpg",
							alt: "Grey Swing Dress"
						},
						{
							id: "6",
							name: "White Sleeveless Jacket - £45",
							src: "app/assets/images/collections/White Sleeveless Jacket/Isaac_Ava_White_Sleeveless_Jacket_Replacement.jpg",
							alt: "White Sleeveless Jacket"
						},
						{
							id: "7",
							name: "Black/White Co Ord Short Set - £50",
							src: "app/assets/images/collections/Black and White Short Set/Isaac_Ava_Black_Dogtooth_Short_Set_Front.jpg",
							alt: "Black and White Short Set"
						},
						{
							id: "8",
							name: "Blue Co Ord Short Set - £50",
							src: "app/assets/images/collections/Blue Co Ord Short Set/isaac_ava_blue_short_set_2.jpg",
							alt: "Blue Co Ord Short Set"
						},
						{
							id: "9",
							name: "Grey Split Back Top - £35",
							src: "app/assets/images/collections/Grey Split Back Top/isaac_ava_grey_split_back_top_2.jpg",
							alt: "Grey Split Back Top"
						},
						{
							id: "10",
							name: "Blue Cocoon Coat - £50",
							src: "app/assets/images/collections/Blue Cocoon Coat/isaac_ava_blue_cocoon_coat_2.jpg",
							alt: "Blue Cocoon Coat"
						},
						{
							id: "11",
							name: "Black Relaxed Jacket - £50",
							src: "app/assets/images/collections/Black Relaxed Jacket/isaac_ava_black_relaxed_2.jpg",
							alt: "Black Relaxed Jacket"
						},
						{
							id: "12",
							name: "Blue Dogtooth Cape - £60",
							src: "app/assets/images/collections/Blue Dogtooth Cape/isaac_ava_blue_dogtooth_cape_2.jpg",
							alt: "Blue Dogtooth Cape"
						},
						{
							id: "13",
							name: "Black Dip Hem Dress - £60",
							src: "app/assets/images/collections/Black Dip Hem Dress/isaac_ava_black_dip_hem_dress_2.jpg",
							alt: "Black Dip Hem Dress"
						},
						{
							id: "14",
							name: "Black Playsuit - £45",
							src: "app/assets/images/collections/Black Playsuit/isaac_ava_black_playsuit_2.jpg",
							alt: "Black Playsuit"
						}
					]
				);
			}, 500);

			return deferred.promise;
		}


		function getThumbnails() {
			var deferred = $q.defer();

			$timeout(function () {
				deferred.resolve(
					[
						{
							id: "1",
							src: "app/assets/images/collections/Black Swing Dress/isaac_ava_black_swing_dress_1.jpg",
							alt: "Black Swing Dress"
						},
						{
							id: "2",
							src: "app/assets/images/collections/Blue Swing Dress/isaac_ava_blue_swing_dress_3.jpg",
							alt: "Blue Swing Dress"
						},
						{
							id: "3",
							src: "app/assets/images/collections/White Jumpsuit/isaac_ava_white_jumpsuit_3.jpg",
							alt: "White Jumpsuit"
						},
						{
							id: "4",
							src: "app/assets/images/collections/Blue Jumpsuit/Isaac_Ava_Blue_Jumpsuit_Front_2.jpg",
							alt: "Blue Jumpsuit"
						},
						{
							id: "5",
							src: "app/assets/images/collections/Grey Swing Dress/Isaac_Ava_Grey_Swing_Dress_Front.jpg",
							alt: "Grey Swing Dress"
						},
						{
							id: "6",
							src: "app/assets/images/collections/White Sleeveless Jacket/Isaac_Ava_White_Sleeveless_Jacket_Replacement.jpg",
							alt: "White Sleeveless Jacket"
						},
						{
							id: "7",
							src: "app/assets/images/collections/Black and White Short Set/Isaac_Ava_Black_Dogtooth_Short_Set_Front.jpg",
							alt: "Black and White Short Set"
						},
						{
							id: "8",
							src: "app/assets/images/collections/Blue Co Ord Short Set/isaac_ava_blue_short_set_2.jpg",
							alt: "Blue Co Ord Short Set"
						},
						{
							id: "9",
							src: "app/assets/images/collections/Grey Split Back Top/isaac_ava_grey_split_back_top_2.jpg",
							alt: "Grey Split Back Top"
						},
						{
							id: "10",
							src: "app/assets/images/collections/Blue Cocoon Coat/isaac_ava_blue_cocoon_coat_2.jpg",
							alt: "Blue Cocoon Coat"
						},
						{
							id: "11",
							src: "app/assets/images/collections/Black Relaxed Jacket/isaac_ava_black_relaxed_2.jpg",
							alt: "Black Relaxed Jacket"
						},
						{
							id: "12",
							src: "app/assets/images/collections/Blue Dogtooth Cape/isaac_ava_blue_dogtooth_cape_2.jpg",
							alt: "Blue Dogtooth Cape"
						},
						{
							id: "13",
							src: "app/assets/images/collections/Black Dip Hem Dress/isaac_ava_black_dip_hem_dress_2.jpg",
							alt: "Black Dip Hem Dress"
						},
						{
							id: "14",
							src: "app/assets/images/collections/Black Playsuit/isaac_ava_black_playsuit_2.jpg",
							alt: "Black Playsuit"
						}
					]
				);
			}, 500);

			return deferred.promise;
		}
	}
})();
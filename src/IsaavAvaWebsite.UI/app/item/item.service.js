(function () {
    "use strict";
    angular
		.module("app")
		.service("ItemService", ItemService);

    // $q and $timeout can be removed when Web API used
    ItemService.$inject = ["$http", "$q", "$timeout"];

    function ItemService($http, $q, $timeout) {
        this.getData = getData;

        // return a promise (like what $http returns)
        function getData(itemId) {
            var deferred = $q.defer();

            if (itemId === "1") {
                $timeout(function () {
                    deferred.resolve({
                        description: "BLACK SWING DRESS",
                        price: "65.00",
                        link: "https://www.fashionpony.co.uk/black-swing-dress-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Black Swing Dress/isaac_ava_black_swing_dress_1.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black Swing Dress/isaac_ava_black_swing_dress_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black Swing Dress/isaac_ava_black_swing_dress_3.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black Swing Dress/isaac_ava_black_swing_dress_4.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "2") {
                $timeout(function () {
                    deferred.resolve({
                        description: "BLUE SWING DRESS",
                        price: "65.00",
                        link: "https://www.fashionpony.co.uk/blue-swing-dress-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Blue Swing Dress/isaac_ava_blue_swing_dress_3.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Swing Dress/isaac_ava_blue_swing_dress_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Swing Dress/isaac_ava_blue_swing_dress_1.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Swing Dress/isaac_ava_blue_swing_dress_4.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "3") {
                $timeout(function () {
                    deferred.resolve({
                        description: "WHITE JUMPSUIT",
                        price: "85.00",
                        link: "https://www.fashionpony.co.uk/white-jumpsuit-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/White Jumpsuit/isaac_ava_white_jumpsuit_3.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/White Jumpsuit/isaac_ava_white_jumpsuit_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/White Jumpsuit/isaac_ava_white_jumpsuit_1.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/White Jumpsuit/isaac_ava_white_jumpsuit_4.jpg",
                                alt: ""
                            },
                        ]
                    });
                }, 500);
            }

            if (itemId === "4") {
                $timeout(function () {
                    deferred.resolve({
                        description: "BLUE JUMPSUIT",
                        price: "85.00",
                        link: "https://www.fashionpony.co.uk/blue-jumpsuit-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Blue Jumpsuit/isaac_ava_blue_jumpsuit_front_1.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Jumpsuit/isaac_ava_blue_jumpsuit_front_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Jumpsuit/isaac_ava_blue_jumpsuit_side.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Jumpsuit/isaac_ava_blue_jumpsuit_back.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "5") {
                $timeout(function () {
                    deferred.resolve({
                        description: "GREY SWING DRESS",
                        price: "45.00",
                        link: "https://www.fashionpony.co.uk/grey-swing-dress-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Grey Swing Dress/isaac_ava_grey_swing_dress_front.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Grey Swing Dress/isaac_ava_grey_swing_dress_back.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "6") {
                $timeout(function () {
                    deferred.resolve({
                        description: "WHITE SLEEVELESS JACKET",
                        price: "45.00",
                        link: "https://www.fashionpony.co.uk/white-sleeveless-jacket-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/White Sleeveless Jacket/isaac_ava_white_sleeveless_jacket_replacement.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/White Sleeveless Jacket/isaac_ava_white_sleeveless_jacket_back_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/White Sleeveless Jacket/isaac_ava_white_sleeveless_jacket_side.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "7") {
                $timeout(function () {
                    deferred.resolve({
                        description: "BLACK/WHITE CO ORD SHORT SET",
                        price: "50.00",
                        link: "https://www.fashionpony.co.uk/black-and-white-co-ord-short-set-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Black and White Short Set/isaac_ava_black_dogtooth_short_set_front.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black and White Short Set/isaac_ava_black_dogtooth_short_set_back.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black and White Short Set/isaac_ava_black_dogtooth_short_set_side.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black and White Short Set/isaac_ava_black_dogtooth_short_set_side_and_editorial_shot.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "8") {
                $timeout(function () {
                    deferred.resolve({
                        description: "BLUE CO ORD SHORT SET",
                        price: "50.00",
                        link: "http://www.fashionpony.co.uk",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Blue Co Ord Short Set/isaac_ava_blue_short_set_3.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Co Ord Short Set/isaac_ava_blue_short_set_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Co Ord Short Set/isaac_ava_blue_short_set_1.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Co Ord Short Set/isaac_ava_blue_short_set_4.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "9") {
                $timeout(function () {
                    deferred.resolve({
                        description: "GREY SPLIT BACK TOP",
                        price: "35.00",
                        link: "https://www.fashionpony.co.uk/grey-split-back-top-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Grey Split Back Top/isaac_ava_grey_split_back_top_3.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Grey Split Back Top/isaac_ava_grey_split_back_top_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Grey Split Back Top/isaac_ava_grey_split_back_top_1.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "10") {
                $timeout(function () {
                    deferred.resolve({
                        description: "BLUE COCOON JACKET",
                        price: "50.00",
                        link: "https://www.fashionpony.co.uk/blue-cocoon-coat-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Blue Cocoon Coat/isaac_ava_blue_cocoon_coat_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Cocoon Coat/isaac_ava_blue_cocoon_coat_1.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Cocoon Coat/isaac_ava_blue_cocoon_coat_3.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "11") {
                $timeout(function () {
                    deferred.resolve({
                        description: "BLACK RELAXED JACKET",
                        price: "50.00",
                        link: "https://www.fashionpony.co.uk/black-relaxed-jacket-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Black Relaxed Jacket/isaac_ava_black_relaxed_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black Relaxed Jacket/isaac_ava_black_relaxed_1.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black Relaxed Jacket/isaac_ava_black_relaxed_3.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "12") {
                $timeout(function () {
                    deferred.resolve({
                        description: "BLUE DOGTOOTH CAPE",
                        price: "60.00",
                        link: "https://www.fashionpony.co.uk/blue-dogtooth-cape-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Blue Dogtooth Cape/isaac_ava_blue_dogtooth_cape_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Dogtooth Cape/isaac_ava_blue_dogtooth_cape_1.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Blue Dogtooth Cape/isaac_ava_blue_dogtooth_cape_3.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "13") {
                $timeout(function () {
                    deferred.resolve({
                        description: "BLACK DIP HEM DRESS",
                        price: "60.00",
                        link: "https://www.fashionpony.co.uk/black-dip-hem-dress-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Black Dip Hem Dress/isaac_ava_black_dip_hem_dress_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black Dip Hem Dress/isaac_ava_black_dip_hem_dress_1.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black Dip Hem Dress/isaac_ava_black_dip_hem_dress_3.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black Dip Hem Dress/isaac_ava_black_dip_hem_dress_4.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            if (itemId === "14") {
                $timeout(function () {
                    deferred.resolve({
                        description: "BLACK PLAYSUIT",
                        price: "45.00",
                        link: "https://www.fashionpony.co.uk/black-playsuit-by-isaac-ava.html",
                        sizes: [6, 8, 10, 12, 14, 16, 18],
                        images: [
                            {
                                src: "app/assets/images/collections/Black Playsuit/isaac_ava_black_playsuit_2.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black Playsuit/isaac_ava_black_playsuit_1.jpg",
                                alt: ""
                            },
                            {
                                src: "app/assets/images/collections/Black Playsuit/isaac_ava_black_playsuit_3.jpg",
                                alt: ""
                            }
                        ]
                    });
                }, 500);
            }

            return deferred.promise;
        };

        //function getData(exerciseId) {
        //    return $http.get("http://localhost:51029/api/exercisestep/" + exerciseId);
        //}
    }
})();
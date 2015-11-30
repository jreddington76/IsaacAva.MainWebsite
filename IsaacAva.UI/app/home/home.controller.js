(function () {
	'use strict';

	angular
        .module('app')
        .controller('HomeController', HomeController);

	function HomeController() {
		var vm = this;

		vm.myInterval = 3000;
		vm.slides = [];

		activate();

		function activate() {

			vm.slides = [
              {
              	image: 'app/assets/images/homepage/homepage_carousel_a.jpg'
              },
              {
              	image: 'app/assets/images/homepage/homepage_carousel_b.jpg'
              },
              {
              	image: 'app/assets/images/homepage/homepage_carousel_c.jpg'
              },
              {
              	image: 'app/assets/images/collections/Black Swing Dress/isaac_ava_black_swing_dress_1.jpg'
              },
			  {
			  	image:'app/assets/images/collections/Black and White Short Set/isaac_ava_black_dogtooth_short_set_editorial_shot.jpg'
			  },
			  {
			  	image: 'app/assets/images/collections/Black Relaxed Jacket/isaac_ava_black_relaxed_3.jpg'
			  }
			];
		}
	}
})();
(function () {
    "use strict";

    angular
		.module("app")
		.directive('iaThumbnail', thumbnail);

    function thumbnail() {
        return {
            restrict: 'E',
            controller: 'ThumbnailController',
            controllerAs: 'vm1',
            templateUrl: 'app/thumbnails/thumbnail.html'
        };
    };
})();
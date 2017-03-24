(function () {
    "use strict";

    angular
		.module("app")
		.directive('iaSiteHeader', siteHeader);

    function siteHeader() {
        return {
            restrict: 'E',
            templateUrl: 'app/assets/templates/header.html'
        };
    };
})();
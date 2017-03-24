(function () {
    "use strict";

    angular
		.module("app")
		.directive('iaSiteFooter', siteFooter);

    function siteFooter() {
        return {
            restrict: 'E',
            templateUrl: 'app/assets/templates/footer.html'
        };
    };
})();
(function () {
    "use strict";

    angular
		.module("app")
		.directive('iaSocial', social);

    function social() {
        return {
            restrict: 'E',
            templateUrl: 'app/assets/templates/social.html'
        };
    };
})();
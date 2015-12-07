describe("collection", function() {

	beforeEach(module("app"));

	var controller;

	beforeEach(inject(function($controller) {
		controller = $controller("CollectionController");
	}));

	describe("controller", function() {
		it("should not be null", function() {
			expect(controller).not.toBe(null);
		});
	});
});
describe('home', function () {

	beforeEach(module('app'));

	var controller;

	beforeEach(inject(function ($controller) {
		controller = $controller('HomeController');
	}));

	describe('controller', function () {
		it('should not be null', function () {
			expect(controller).not.toBe(null);
		});
	});

	describe('interval', function () {
		it('should be set to default of 3', function () {
			expect(controller.myInterval).toBe(3000);
		});
	});

	describe('slides', function () {
		it('should contain 6 elements', function () {
			var slides = controller.slides;
			expect(slides.length).toEqual(6);
		});
	});
});
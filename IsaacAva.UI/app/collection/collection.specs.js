describe('collection', function () {

	beforeEach(module('app'));

	var $controller;
	var collectionService;

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
		//controller = $controller('CollectionController', { collectionService: collectionService });
	}));

	describe('controller', function () {
		it('should not be null', function () {
			expect(controller).not.toBe(null);
		});
	});

	describe('slides', function () {
		it('should contain 6 elements', function () {
			collectionService = { getData: function () { } };
			var mock = sinon.mock(collectionService);
			mock.expects("getData")
			var collection = controller.collection;
			expect(collection.length).toEqual(6);
		});
	});

	// create a spy and verify it was called once
	describe('collectionService', function () {
		it('getData was called once', function () {
			var spy = sinon.spy();
			var controller = $controller('CollectionController', { collectionService: spy });
			var collection = controller.collection;
			expect(spy.called).toEqual(true);
		});
	});
});
using System.Collections.Generic;
using System.Linq;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;
using IsaacAvaWebsite.Interfaces;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace IsaacAvaWebsite.Services.Tests
{
	[TestClass]
	public class ProductServiceTests
	{
		private IList<ProductDto> _productDtos;
		private Mock<IProductMapper> _productMapper;
		private Mock<IProductRepository> _productRepository;
		private IList<Product> _products;
		private ProductService _productService;
		private Mock<IUnitOfWork> _unitOfWork;

		[TestInitialize]
		public void Setup()
		{
			_unitOfWork = new Mock<IUnitOfWork>();
			_productRepository = new Mock<IProductRepository>();
			_productMapper = new Mock<IProductMapper>();

			_productService = new ProductService(_unitOfWork.Object, _productMapper.Object);

			_unitOfWork.Setup(x => x.ProductRepository()).Returns(_productRepository.Object);
			_products = new List<Product>
			{
				new Product {ID = 1},
				new Product {ID = 2}
			};

			_productDtos = new List<ProductDto>
			{
				new ProductDto {Id = "1"},
				new ProductDto {Id = "2"}
			};
		}

		[TestMethod]
		public void GetProducts_ShouldReturnAllProductsFromTheRepo()
		{
			// Arrange

			// Act
			_productService.GetProducts();

			// Assert
			_productRepository.Verify(x => x.GetAll(), Times.Once);
		}

		[TestMethod]
		public void GetProducts_ShouldMapProductsToDto()
		{
			// Arrange
			_productRepository.Setup(x => x.GetAll()).Returns(_products);

			// Act
			_productService.GetProducts();

			// Assert
			_productMapper.Verify(x => x.MapProducts(_products), Times.Once);
		}

		[TestMethod]
		public void GetProducts_ShouldReturnMappedProducts()
		{
			// Arrange
			_productRepository.Setup(x => x.GetAll()).Returns(_products);
			_productMapper.Setup(x => x.MapProducts(_products)).Returns(_productDtos);

			// Act
			var result = _productService.GetProducts();

			// Assert
			CollectionAssert.AreEqual(_productDtos.ToList(), result.ToList());
		}

		[TestMethod]
		public void AddProduct_ShouldAddProductToRepo()
		{
			// Arrange
			var product = new Product();

			// Act
			_productService.AddProduct(product);

			// Assert
			_productRepository.Verify(x => x.Add(product), Times.Once);
		}

		[TestMethod]
		public void AddProduct_ShouldSaveTheUnitOfWork()
		{
			// Arrange
			var product = new Product();

			// Act
			_productService.AddProduct(product);

			// Assert
			_unitOfWork.Verify(x => x.Save(), Times.Once);
		}
	}
}
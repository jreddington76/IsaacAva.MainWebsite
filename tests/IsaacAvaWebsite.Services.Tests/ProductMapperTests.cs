using System.Collections.Generic;
using System.Linq;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace IsaacAvaWebsite.Services.Tests
{
	[TestClass]
	public class ProductMapperTests
	{
		private ProductMapper _productMapper;

		[TestInitialize]
		public void Startup()
		{
			_productMapper = new ProductMapper();
		}

		[TestMethod]
		public void MapProducts_ShouldMapDomainObjectToDTO()
		{
			// Arrange
			var products = new List<Product>
			{
				GenerateProduct(1, "product 1", "src of product 1", "alt for product 1"),
				GenerateProduct(1, "product 2", "src of product 2", "alt for product 2")
			};

			// Act
			var result = _productMapper.MapProducts(products).ToList();

			// Assert
			for(var i = 0; i<products.Count;i++)
			{
				AssertPropertiesAreEqual(products[i], result[i]);	
			}
		}

		private Product GenerateProduct(int id, string description, string src, string alt)
		{
			return new Product
			{
				ID = id,
				Description = description,
				ImageSrc=src,
				ImageAlt = alt
			};
		}

		private void AssertPropertiesAreEqual(Product product, ProductDto dto)
		{
			Assert.AreEqual(product.ID.ToString(), dto.Id);
			Assert.AreEqual(product.Description, dto.Name);
			Assert.AreEqual(product.ImageSrc, dto.Src);
			Assert.AreEqual(product.ImageAlt, dto.Alt);
		}
	}
}
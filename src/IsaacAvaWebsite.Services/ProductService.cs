using System.Collections.Generic;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.Services
{
	public class ProductService : IProductService
	{
		private readonly IProductMapper _productMapper;
		private readonly IUnitOfWork _unitOfWork;

		public ProductService(IUnitOfWork unitOfWork, IProductMapper productMapper)
		{
			_unitOfWork = unitOfWork;
			_productMapper = productMapper;
		}

		public IEnumerable<ProductDto> GetProducts()
		{
			var products = _unitOfWork.ProductRepository().GetAll();
			return _productMapper.MapProducts(products);
		}

		public void AddProduct(Product product)
		{
			_unitOfWork.ProductRepository().Add(product);
			_unitOfWork.Save();
		}
	}
}
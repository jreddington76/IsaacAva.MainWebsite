using System.Collections.Generic;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;

namespace IsaacAvaWebsite.Interfaces
{
	public interface IProductService
	{
		IEnumerable<ProductDto> GetProducts();
		void AddProduct(Product product);
	}
}
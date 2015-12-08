using System.Collections.Generic;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;

namespace IsaacAvaWebsite.Interfaces
{
	public interface IProductMapper
	{
		IEnumerable<ProductDto> MapProducts(IEnumerable<Product> products);
	}
}
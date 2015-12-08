using System;
using System.Collections.Generic;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.Services
{
	public class ProductMapper : IProductMapper
	{
		public IEnumerable<ProductDto> MapProducts(IEnumerable<Product> products)
		{
			throw new NotImplementedException();
		}
	}
}
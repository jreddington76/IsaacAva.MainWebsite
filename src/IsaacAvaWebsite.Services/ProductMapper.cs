using System.Collections.Generic;
using System.Linq;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.Services
{
	public class ProductMapper : IProductMapper
	{
		public IEnumerable<ProductDto> MapProducts(IEnumerable<Product> products)
		{
			return products.Select(product => new ProductDto
			{
				Id = product.ID.ToString(),
				Name = product.Description,
				Src = product.ImageSrc,
				Alt = product.ImageAlt
			}).ToList();
		}
	}
}
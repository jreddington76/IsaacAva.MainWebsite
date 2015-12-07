using System.Data.Entity;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.Services
{
	public class ProductRepository : GenericRepository<Product>, IProductRepository
	{
		public ProductRepository(DbContext context) : base(context)
		{
		}
	}
}
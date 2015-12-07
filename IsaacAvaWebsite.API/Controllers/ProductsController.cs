using System.Linq;
using System.Web.Http;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Services.Context;

namespace IsaacAvaWebsite.API.Controllers
{
	public class ProductsController : ApiController
	{
		private readonly IsaacAvaContext db = new IsaacAvaContext();

		public IHttpActionResult Get()
		{
			return Ok(db.Products.ToList());
		}

		[Authorize(Roles="Administrators")]
		public IHttpActionResult Post(Product product)
		{
			db.Products.Add(product);
			return Ok();
		}
	}
}
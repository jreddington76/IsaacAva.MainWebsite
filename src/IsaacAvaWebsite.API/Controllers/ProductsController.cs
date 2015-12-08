using System;
using System.Web.Http;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.API.Controllers
{
	public class ProductsController : ApiController
	{
		private readonly IProductService _productService;

		public ProductsController(IProductService productService)
		{
			_productService = productService;
		}

		public IHttpActionResult Get()
		{
			try
			{
				return Ok(_productService.GetProducts());
			}
			catch(Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[Authorize(Roles = "Administrators")]
		public IHttpActionResult Post(Product product)
		{
			try
			{
				_productService.AddProduct(product);
				return Ok();
			}
			catch(Exception ex)
			{
				return BadRequest();
			}
		}
	}
}
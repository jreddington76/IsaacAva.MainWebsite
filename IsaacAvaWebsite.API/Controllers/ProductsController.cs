using System.Web.Http;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.API.Controllers
{
	public class ProductsController : ApiController
	{
		private readonly IUnitOfWork _unitOfWork;

		public ProductsController(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		public IHttpActionResult Get()
		{
			return Ok(_unitOfWork.ProductRepository().GetAll());
		}

		[Authorize(Roles = "Administrators")]
		public IHttpActionResult Post(Product product)
		{
			_unitOfWork.ProductRepository().Add(product);
			_unitOfWork.Save();
			return Ok();
		}
	}
}
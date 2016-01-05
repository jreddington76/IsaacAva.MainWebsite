using System;
using System.Web.Http;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.API.Controllers
{
	[Authorize]
	public class AdminController : ApiController
	{
		[Route("Categories")]
		public IHttpActionResult Get()
		{
			try
			{
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}
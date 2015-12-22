using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.API.Controllers
{
	[Authorize]
    public class BlogEntryController : ApiController
    {
		private readonly IEventService _eventService;

		public BlogEntryController(IEventService eventService)
		{
			_eventService = eventService;
		}

		public IHttpActionResult Get()
		{
			try
			{
				return Ok(_eventService.GetEvents());
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}

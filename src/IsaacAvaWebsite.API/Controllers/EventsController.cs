using System;
using System.Web.Http;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.API.Controllers
{
	public class EventsController : ApiController
	{
		private readonly IEventService _eventService;

		public EventsController(IEventService eventService)
		{
			_eventService = eventService;
		}

		public IHttpActionResult Get()
		{
			try
			{
				return Ok(_eventService.GetEvents());
			}
			catch(Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}
using System.Collections.Generic;
using System.Linq;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.Services
{
	public class EventMapper : IEventMapper
	{
		public IEnumerable<EventDto> MapEvents(IEnumerable<Event> events)
		{
			return events.Select(x => new EventDto
			{
				Id = x.ID.ToString(),
				Image = x.ImageSrc,
				Alt = x.ImageAlt,
				Link = x.Link,
				Copy =
					string.Format("<p>{0}<br/><strong>{1}</strong><br/>{2}</p>", x.EventDate.ToString("dd MMMM yyyy"), x.Name,
						x.Description)
			}).ToList();
		}
	}
}
using System.Collections.Generic;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;

namespace IsaacAvaWebsite.Interfaces
{
	public interface IEventMapper
	{
		IEnumerable<EventDto> MapEvents(IEnumerable<Event> events);
	}
}
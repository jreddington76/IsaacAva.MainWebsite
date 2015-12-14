using System.Collections.Generic;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;

namespace IsaacAvaWebsite.Interfaces
{
	public interface IEventService
	{
		IEnumerable<EventDto> GetEvents();
		void AddEvent(Event product);
	}
}
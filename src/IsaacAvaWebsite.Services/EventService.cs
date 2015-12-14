using System.Collections.Generic;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.Services
{
	public class EventService : IEventService
	{
		private readonly IEventMapper _eventMapper;
		private readonly IUnitOfWork _unitOfWork;

		public EventService(IUnitOfWork unitOfWork, IEventMapper eventMapper)
		{
			_unitOfWork = unitOfWork;
			_eventMapper = eventMapper;
		}

		public IEnumerable<EventDto> GetEvents()
		{
			var events = _unitOfWork.EventRepository().GetAll();
			return _eventMapper.MapEvents(events);
		}

		public void AddEvent(Event eventObj)
		{
			_unitOfWork.EventRepository().Add(eventObj);
			_unitOfWork.Save();
		}
	}
}
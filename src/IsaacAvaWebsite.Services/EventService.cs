using System;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.Services
{
	public class EventService
	{
		private readonly IUnitOfWork _unitOfWork;

		public EventService(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		public void GetEvents()
		{
			_unitOfWork.EventRepository().GetAll();
		}

		public void AddEvent(Event eventObj)
		{
			_unitOfWork.EventRepository().Add(eventObj);
			_unitOfWork.Save();
		}
	}
}
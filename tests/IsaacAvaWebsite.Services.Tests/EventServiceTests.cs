using System.Collections.Generic;
using System.Linq;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;
using IsaacAvaWebsite.Interfaces;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace IsaacAvaWebsite.Services.Tests
{
	[TestClass]
	public class EventServiceTests
	{
		private IList<EventDto> _eventDtos;
		private Mock<IEventMapper> _eventMapper;
		private Mock<IEventRepository> _eventRepository;
		private IList<Event> _events;
		private EventService _eventService;
		private Mock<IUnitOfWork> _unitOfWork;

		[TestInitialize]
		public void Setup()
		{
			_unitOfWork = new Mock<IUnitOfWork>();
			_eventRepository = new Mock<IEventRepository>();
			_eventMapper = new Mock<IEventMapper>();

			_eventService = new EventService(_unitOfWork.Object, _eventMapper.Object);

			_unitOfWork.Setup(x => x.EventRepository()).Returns(_eventRepository.Object);

			_events = new List<Event>
			{
				new Event {ID = 1},
				new Event {ID = 2}
			};

			_eventDtos = new List<EventDto>
			{
				new EventDto {Id = "1"},
				new EventDto {Id = "2"}
			};
		}

		[TestMethod]
		public void GetEvents_ShouldReturnAllEventsFromTheRepo()
		{
			// Arrange

			// Act
			_eventService.GetEvents();

			// Assert
			_eventRepository.Verify(x => x.GetAll(), Times.Once);
		}

		[TestMethod]
		public void GetEvents_ShouldMapEventsToDto()
		{
			// Arrange
			_eventRepository.Setup(x => x.GetAll()).Returns(_events);

			// Act
			_eventService.GetEvents();

			// Assert
			_eventMapper.Verify(x => x.MapEvents(_events), Times.Once);
		}

		[TestMethod]
		public void GetEvents_ShouldReturnMappedEvents()
		{
			// Arrange
			_eventRepository.Setup(x => x.GetAll()).Returns(_events);
			_eventMapper.Setup(x => x.MapEvents(_events)).Returns(_eventDtos);

			// Act
			var result = _eventService.GetEvents();

			// Assert
			CollectionAssert.AreEqual(_eventDtos.ToList(), result.ToList());
		}

		[TestMethod]
		public void AddEvent_ShouldAddEventToRepo()
		{
			// Arrange
			var eventObj = new Event();

			// Act
			_eventService.AddEvent(eventObj);

			// Assert
			_eventRepository.Verify(x => x.Add(eventObj), Times.Once);
		}

		[TestMethod]
		public void AddEvent_ShouldSaveTheUnitOfWork()
		{
			// Arrange
			var eventObj = new Event();

			// Act
			_eventService.AddEvent(eventObj);

			// Assert
			_unitOfWork.Verify(x => x.Save(), Times.Once);
		}
	}
}
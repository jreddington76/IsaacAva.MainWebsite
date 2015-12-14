using System;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Interfaces;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using IsaacAvaWebsite.Services;
using Moq;

namespace IsaacAvaWebsite.Services.Tests
{
	[TestClass]
	public class EventServiceTests
	{
		private EventService _eventService;
		private Mock<IUnitOfWork> _unitOfWork;
		private Mock<IEventRepository> _eventRepository;

		[TestInitialize]
		public void Setup()
		{
			_unitOfWork=new Mock<IUnitOfWork>();
			_eventRepository=new Mock<IEventRepository>();

			_eventService = new EventService(_unitOfWork.Object);

			_unitOfWork.Setup(x => x.EventRepository()).Returns(_eventRepository.Object);
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
		public void AddProduct_ShouldSaveTheUnitOfWork()
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

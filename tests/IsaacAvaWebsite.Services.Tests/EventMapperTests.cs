using System;
using System.Collections.Generic;
using System.Linq;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Domain.DTO;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace IsaacAvaWebsite.Services.Tests
{
	[TestClass]
	public class EventMapperTests
	{
		private EventMapper _eventMapper;

		[TestInitialize]
		public void Startup()
		{
			_eventMapper = new EventMapper();
		}

		[TestMethod]
		public void MapEvents_ShouldMapDomainObjectToDTO()
		{
			// Arrange
			var products = new List<Event>
			{
				GenerateEvent(1, "event 1", "description of event 1", new DateTime(2015, 07, 10), "src for event 1",
					"alt for event 1", "link"),
				GenerateEvent(2, "event 2", "description of event 2", new DateTime(2015, 09, 19), "src for event 2",
					"alt for event 2", "link")
			};

			// Act
			var result = _eventMapper.MapEvents(products).ToList();

			// Assert
			for(var i = 0; i < products.Count; i++)
			{
				AssertEventsAreEqual(products[i], result[i]);
			}
		}

		private Event GenerateEvent(int id, string name, string description, DateTime date, string src, string alt,
			string link)
		{
			return new Event
			{
				ID = id,
				Name = name,
				Description = description,
				EventDate = date,
				ImageSrc = src,
				ImageAlt = alt,
				Link = link
			};
		}

		private void AssertEventsAreEqual(Event eventObj, EventDto dto)
		{
			Assert.AreEqual(eventObj.ID.ToString(), dto.Id);
			Assert.AreEqual(string.Format("<p>{0}<br/><strong>{1}</strong><br/>{2}</p>", eventObj.EventDate.ToString("dd MMMM yyyy"), eventObj.Name, eventObj.Description), dto.Copy);
			Assert.AreEqual(eventObj.ImageSrc, dto.Image);
			Assert.AreEqual(eventObj.ImageAlt, dto.Alt);
			Assert.AreEqual(eventObj.Link, dto.Link);
		}
	}
}
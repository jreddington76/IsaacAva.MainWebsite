using System;

namespace IsaacAvaWebsite.Domain
{
	public class Event
	{
		public int ID { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public DateTime EventDate { get; set; }
		public string ImageSrc { get; set; }
		public string ImageAlt { get; set; }
		public string Link { get; set; }
	}
}
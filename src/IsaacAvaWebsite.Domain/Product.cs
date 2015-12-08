using System.Collections.Generic;

namespace IsaacAvaWebsite.Domain
{
	public class Product
	{
		public int ID { get; set; }
		public string Description { get; set; }
		public decimal Price { get; set; }
		public string LinkToShop { get; set; }
		public string ImageSrc { get; set; }
		public string ImageAlt { get; set; }
		public virtual ICollection<Image> Images { get; set; }
	}
}
using System.Collections.Generic;

namespace IsaacAva.Domain
{
	public class Product
	{
		public int ID { get; set; }
		public string Description { get; set; }
		public decimal Price { get; set; }
		public string Link { get; set; }
		public virtual ICollection<Image> Images { get; set; }
	}
}
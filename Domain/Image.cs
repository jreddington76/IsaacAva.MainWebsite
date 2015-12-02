namespace IsaacAva.Domain
{
	public class Image
	{
		public int Id { get; set; }
		public string Src { get; set; }
		public string Alt { get; set; }
		public int ProductID { get; set; }
		public virtual Product Product { get; set; }
	}
}
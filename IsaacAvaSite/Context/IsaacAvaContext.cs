using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using IsaacAva.Domain;

namespace IsaacAvaSite.Context
{
	public class IsaacAvaContext : DbContext
	{
		public IsaacAvaContext() : base("IsaacAvaContext")
		{
		}

		public DbSet<Product> Products { get; set; }

		protected override void OnModelCreating(DbModelBuilder modelBuilder)
		{
			modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
		}
	}
}
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using IsaacAvaWebsite.Domain;

namespace IsaacAvaWebsite.Services.Context
{
	public class IsaacAvaContext : DbContext
	{
		public IsaacAvaContext() : base("IsaacAvaContext")
		{
		}

		public DbSet<Product> Products { get; set; }
		public DbSet<Event> Events { get; set; }

		protected override void OnModelCreating(DbModelBuilder modelBuilder)
		{
			modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
		}
	}
}
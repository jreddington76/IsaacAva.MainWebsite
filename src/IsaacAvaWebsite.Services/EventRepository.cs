using System.Data.Entity;
using IsaacAvaWebsite.Domain;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.Services
{
	public class EventRepository : GenericRepository<Event>, IEventRepository
	{
		public EventRepository(DbContext context) : base(context)
		{
		}
	}
}
using System;

namespace IsaacAvaWebsite.Interfaces
{
	public interface IUnitOfWork : IDisposable
	{
		IEventRepository EventRepository();
		IProductRepository ProductRepository();
		void Save();
	}
}
using System;

namespace IsaacAvaWebsite.Interfaces
{
	public interface IUnitOfWork : IDisposable
	{
		IProductRepository ProductRepository();
		void Save();
	}
}
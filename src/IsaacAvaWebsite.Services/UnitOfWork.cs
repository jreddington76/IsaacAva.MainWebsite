using System;
using IsaacAvaWebsite.Interfaces;
using IsaacAvaWebsite.Services.Context;

namespace IsaacAvaWebsite.Services
{
	public class UnitOfWork : IUnitOfWork
	{
		private readonly IsaacAvaContext _context = new IsaacAvaContext();
		private bool _disposed;
		private IProductRepository _productRepository;
		private IEventRepository _eventRepository;

		public IProductRepository ProductRepository()
		{
			return _productRepository ?? (_productRepository = new ProductRepository(_context));
		}

		public IEventRepository EventRepository()
		{
			return _eventRepository ?? (_eventRepository = new EventRepository(_context));
		}

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}

		public void Save()
		{
			_context.SaveChanges();
		}

		protected virtual void Dispose(bool disposing)
		{
			if (!_disposed)
			{
				if (disposing)
				{
					_context.Dispose();
				}
			}
			_disposed = true;
		}
	}
}
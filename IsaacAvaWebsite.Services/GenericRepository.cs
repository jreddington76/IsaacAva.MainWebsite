using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.SqlServer;
using System.Linq;
using System.Linq.Expressions;
using IsaacAvaWebsite.Interfaces;

namespace IsaacAvaWebsite.Services
{
	public abstract class GenericRepository<T> : IGenericRepository<T>
		where T : class
	{
		protected readonly IDbSet<T> Dbset;
		protected DbContext Entities;

		protected GenericRepository(DbContext context)
		{
			var type = typeof(SqlProviderServices);
			Entities = context;
			Dbset = context.Set<T>();
		}

		public virtual IEnumerable<T> GetAll()
		{
			return Dbset.AsEnumerable();
		}

		public IEnumerable<T> FindBy(Expression<Func<T, bool>> predicate)
		{
			var query = Dbset.Where(predicate).AsEnumerable();
			return query;
		}

		public virtual T Add(T entity)
		{
			return Dbset.Add(entity);
		}

		public virtual T Delete(T entity)
		{
			return Dbset.Remove(entity);
		}

		public virtual void Edit(T entity)
		{
			Entities.Entry(entity).State = EntityState.Modified;
		}

		public virtual void Save()
		{
			Entities.SaveChanges();
		}

		public void Reload(T entity)
		{
			Entities.Entry(entity).Reload();
		}
	}
}
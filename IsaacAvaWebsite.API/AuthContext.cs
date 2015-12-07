using Microsoft.AspNet.Identity.EntityFramework;

namespace IsaacAvaWebsite.API
{
	public class AuthContext : IdentityDbContext<IdentityUser>
	{
		public AuthContext()
			: base("AuthContext")
		{
		}
	}
}
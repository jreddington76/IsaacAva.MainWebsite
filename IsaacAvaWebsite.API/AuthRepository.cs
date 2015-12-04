﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using IsaacAvaWebsite.API.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace IsaacAvaWebsite.API
{
	public class AuthRepository : IDisposable
	{
		private readonly AuthContext _ctx;
		private readonly UserManager<IdentityUser> _userManager;

		public AuthRepository()
		{
			_ctx = new AuthContext();
			_userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_ctx));
		}

		public void Dispose()
		{
			_ctx.Dispose();
			_userManager.Dispose();
		}

		public async Task<IdentityResult> RegisterUser(UserModel userModel)
		{
			var user = new IdentityUser
			{
				UserName = userModel.UserName
			};

			var result = await _userManager.CreateAsync(user, userModel.Password);

			return result;
		}

		public async Task<IdentityUser> FindUser(string userName, string password)
		{
			var user = await _userManager.FindAsync(userName, password);

			return user;
		}
	}
}
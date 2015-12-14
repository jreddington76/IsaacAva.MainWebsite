using System;
using System.Reflection;
using System.Web.Http;
using IsaacAvaWebsite.API;
using IsaacAvaWebsite.API.Providers;
using IsaacAvaWebsite.Interfaces;
using IsaacAvaWebsite.Services;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Ninject;
using Ninject.Web.Common.OwinHost;
using Ninject.Web.WebApi.OwinHost;
using Owin;

[assembly: OwinStartup(typeof(Startup))]
namespace IsaacAvaWebsite.API
{
	public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			ConfigureOAuth(app);

			var config = new HttpConfiguration();
			WebApiConfig.Register(config);
			app.UseCors(CorsOptions.AllowAll);

			app.UseNinjectMiddleware(CreateKernel).UseNinjectWebApi(config);
		}

		public void ConfigureOAuth(IAppBuilder app)
		{
			var oAuthServerOptions = new OAuthAuthorizationServerOptions
			{
				AllowInsecureHttp = true,
				TokenEndpointPath = new PathString("/token"),
				AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
				Provider = new SimpleAuthorizationServerProvider()
			};

			// Token Generation
			app.UseOAuthAuthorizationServer(oAuthServerOptions);
			app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
		}

		private static StandardKernel CreateKernel()
		{
			var kernel = new StandardKernel();
			kernel.Load(Assembly.GetExecutingAssembly());

			kernel.Bind<IUnitOfWork>().To<UnitOfWork>();
			kernel.Bind<IProductService>().To<ProductService>();
			kernel.Bind<IProductMapper>().To<ProductMapper>();
			kernel.Bind<IEventService>().To<EventService>();
			kernel.Bind<IEventMapper>().To<EventMapper>();
			return kernel;
		}
	}
}
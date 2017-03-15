using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BootStrap__MVC_Fundamentals_.Startup))]
namespace BootStrap__MVC_Fundamentals_
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

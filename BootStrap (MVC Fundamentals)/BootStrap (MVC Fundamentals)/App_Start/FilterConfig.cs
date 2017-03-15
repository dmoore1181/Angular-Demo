using System.Web;
using System.Web.Mvc;

namespace BootStrap__MVC_Fundamentals_
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}

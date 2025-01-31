using System.Web;
using System.Web.Mvc;

namespace sodo_edubill_co_kr
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
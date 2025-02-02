using sodo_edubill_co_kr.Attributes;
using sodo_edubill_co_kr.Helper;
using sodo_edubill_co_kr.Models;
using sodo_edubill_co_kr.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace sodo_edubill_co_kr.Controllers
{
    public class CompanyController : Controller
    {
        //
        // GET: /Company/

        public ActionResult Index()
        {
            return View();
        }

    }
}

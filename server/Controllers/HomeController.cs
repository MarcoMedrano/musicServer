using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace musicServer.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult FileStatus()
        {
            ViewData["Message"] = "File Status - MusicServer";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using rewritten_guide.Models;

namespace rewritten_guide.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult Faq()
        {
            return View();
        }

        public IActionResult Sitemap()
        {
            return View();
        }

        public IActionResult Toontips()
        {
            return View();
        }

        public IActionResult Gardening()
        {
            return View("Views/Home/Activities/Gardening/Gardening.cshtml");
        }

        public IActionResult GardeningSpecies()
        {
            return View("Views/Home/Activities/Gardening/GardeningSpecies.cshtml");
        }

        public IActionResult Fishing()
        {
           return View("Views/Home/Activities/Fishing/Fishing.cshtml"); 
        }

        public IActionResult FishingRods()
        {
           return View("Views/Home/Activities/Fishing/FishingRods.cshtml"); 
        }

        public IActionResult FishingPonds()
        {
           return View("Views/Home/Activities/Fishing/FishingPonds.cshtml"); 
        }

        public IActionResult Racing()
        {
            return View("Views/Home/Activities/Racing.cshtml");
        }

        public IActionResult Golfing()
        {
            return View("Views/Home/Activities/Golfing.cshtml");
        }

        public IActionResult Doodles()
        {
            return View("Views/Home/Activities/Doodles.cshtml");
        }

        public IActionResult Sellbot()
        {
            return View("Views/Home/Cogs/Sellbot.cshtml");
        }

        public IActionResult Cashbot()
        {
            return View("Views/Home/Cogs/Cashbot.cshtml");
        }

        public IActionResult Lawbot()
        {
            return View("Views/Home/Cogs/Lawbot.cshtml");
        }

        public IActionResult Bossbot()
        {
            return View("Views/Home/Cogs/Bossbot.cshtml");
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

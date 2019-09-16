using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using rewritten_guide.Models;
using System.Net.Mail;

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

        public IActionResult Contact(ContactModel cm)
        {
            if(ModelState.IsValid)
            {
                try
                {
                    MailMessage msz = new MailMessage();
                    msz.From = new MailAddress(cm.Email);
                    msz.To.Add("spikes.rewritten.guide@gmail.com");
                    msz.Subject = $"New Inquiry from {cm.Name} at {cm.Email}";
                    msz.Body = cm.Message;
                    SmtpClient smtp = new SmtpClient();

                    smtp.Host = "smtp.gmail.com";

                    smtp.Port = 587;

                    smtp.Credentials = new System.Net.NetworkCredential("spikes.rewritten.guide@gmail.com", "#spike0313");

                    smtp.EnableSsl = true;

                    smtp.Send(msz);

                    ModelState.Clear();
                    ViewBag.Message = "Thank for for you question! Spike will get back to you as soon as possible!";
                }
                catch(Exception)
                {
                    ModelState.Clear();
                    ViewBag.Message = $"Sorry there was a problem processing your message. Try again!";
                }
            }
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
            return View("Views/Home/Activities/Gardening.cshtml");
        }

        public PartialViewResult LoadGardening1() {
            return PartialView("_GardeningPartialView");
        }

        public IActionResult LoadGardening2() {
            return PartialView("_GardeningSpeciesView");
        }

        public IActionResult Fishing()
        {
           return View("Views/Home/Activities/Fishing.cshtml"); 
        }

        public PartialViewResult LoadFishing1() {
            return PartialView("_FishingPartialView");
        }

        public IActionResult LoadFishing2() {
            return PartialView("_FishingRodView");
        }

        public IActionResult LoadFishing3() {
            return PartialView("_FishingPondView");
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

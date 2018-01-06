using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NgNoobProject.Model;

namespace NgNoobProject.Controllers
{
    public class CustomerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [Produces("application/json")]
        [Route("api/Customer")]
        public IEnumerable<Customer> GetCustomers()
        {
            var customers = new List<Customer>();
            customers.Add(new Customer { FirstName = "asif", LastName = "rahman", Email = "asif0531@live.com" });
            return customers;
        }
    }
}
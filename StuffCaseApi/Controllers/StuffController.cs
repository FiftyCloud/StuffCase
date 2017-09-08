using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using StuffCaseApi.Models;
using System.Linq;
using Microsoft.AspNetCore.Cors;

namespace StuffCaseApi.Controllers
{
    [Route("api/[controller]")]
    public class StuffController : Controller
    {
        private readonly StuffContext _context;

        public StuffController(StuffContext context)
        {
            _context = context;

            if (_context.StuffItems.Count() == 0)
            {
                _context.StuffItems.Add(new StuffItem { 
                    Id = 11,
                    Name = "Item1",
                    Category = "Fantastic",
                    Date = "09/03/1991",
                    Author = "Werber"
                     });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        [EnableCors("AllowSpecificOrigin")]
        public IEnumerable<StuffItem> GetAll()
        {
            return _context.StuffItems.ToList();
        }

        [HttpGet("{id}", Name = "GetStuff")]
        [EnableCors("AllowSpecificOrigin")]
        public IActionResult GetById(int id)
        {
            var item = _context.StuffItems.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }       
    }
}
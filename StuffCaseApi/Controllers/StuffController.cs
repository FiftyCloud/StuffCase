using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using StuffCaseApi.Models;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using StuffCaseApi.Data;

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
            return StuffData.GetStuff();
        }

        [HttpGet("{id}", Name = "GetStuff")]
        [EnableCors("AllowSpecificOrigin")]
        public IActionResult GetById(int id)
        {
            var item = StuffData.GetStuff(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        } 

        [HttpPut("{id}")]
        [EnableCors("AllowSpecificOrigin")]
        public IActionResult Update(int id, [FromBody] StuffItem item)
        {
            if (item == null || item.Id != id)
            {
                return BadRequest();
            }

           StuffData.UpdateStuff(id, item);
            return new NoContentResult();
        } 

        [HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public IActionResult Create([FromBody] StuffItem item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            StuffData.CreateStuff(item);

            item = StuffData.GetStuff(StuffData.GetMaxId());
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);;
        }     
    }
}
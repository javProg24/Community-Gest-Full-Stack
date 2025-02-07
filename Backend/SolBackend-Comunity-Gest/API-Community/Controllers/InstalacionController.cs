using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data.Context;
using Data.Models;

namespace API_Community.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstalacionController : ControllerBase
    {
        private readonly Context_DB _context;

        public InstalacionController(Context_DB context)
        {
            _context = context;
        }

        // GET: api/Instalacion
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Instalacion>>> GetInstalaciones()
        {
            return await _context.Instalaciones.ToListAsync();
        }

        // GET: api/Instalacion/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Instalacion>> GetInstalacion(int id)
        {
            var instalacion = await _context.Instalaciones.FindAsync(id);

            if (instalacion == null)
            {
                return NotFound();
            }

            return instalacion;
        }

        // PUT: api/Instalacion/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInstalacion(int id, Instalacion instalacion)
        {
            if (id != instalacion.ID)
            {
                return BadRequest();
            }

            _context.Entry(instalacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InstalacionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Instalacion
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Instalacion>> PostInstalacion(Instalacion instalacion)
        {
            _context.Instalaciones.Add(instalacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInstalacion", new { id = instalacion.ID }, instalacion);
        }

        // DELETE: api/Instalacion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInstalacion(int id)
        {
            var instalacion = await _context.Instalaciones.FindAsync(id);
            if (instalacion == null)
            {
                return NotFound();
            }

            _context.Instalaciones.Remove(instalacion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InstalacionExists(int id)
        {
            return _context.Instalaciones.Any(e => e.ID == id);
        }
    }
}

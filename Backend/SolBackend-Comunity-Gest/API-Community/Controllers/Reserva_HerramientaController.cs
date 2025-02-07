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
    public class Reserva_HerramientaController : ControllerBase
    {
        private readonly Context_DB _context;

        public Reserva_HerramientaController(Context_DB context)
        {
            _context = context;
        }

        // GET: api/Reserva_Herramienta
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reserva_Herramienta>>> GetReserva_Herramientas()
        {
            return await _context.Reserva_Herramientas
                .Include(r=>r.Herramienta)
                .Include(r=>r.Usuario)
                .ToListAsync();
        }

        // GET: api/Reserva_Herramienta/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reserva_Herramienta>> GetReserva_Herramienta(int id)
        {
            var reserva_Herramienta = await _context.Reserva_Herramientas.FindAsync(id);

            if (reserva_Herramienta == null)
            {
                return NotFound();
            }

            return reserva_Herramienta;
        }

        // PUT: api/Reserva_Herramienta/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReserva_Herramienta(int id, Reserva_Herramienta reserva_Herramienta)
        {
            if (id != reserva_Herramienta.ID)
            {
                return BadRequest();
            }

            _context.Entry(reserva_Herramienta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Reserva_HerramientaExists(id))
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

        // POST: api/Reserva_Herramienta
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Reserva_Herramienta>> PostReserva_Herramienta(Reserva_Herramienta reserva_Herramienta)
        {
            _context.Reserva_Herramientas.Add(reserva_Herramienta);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReserva_Herramienta", new { id = reserva_Herramienta.ID }, reserva_Herramienta);
        }

        // DELETE: api/Reserva_Herramienta/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReserva_Herramienta(int id)
        {
            var reserva_Herramienta = await _context.Reserva_Herramientas.FindAsync(id);
            if (reserva_Herramienta == null)
            {
                return NotFound();
            }

            _context.Reserva_Herramientas.Remove(reserva_Herramienta);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Reserva_HerramientaExists(int id)
        {
            return _context.Reserva_Herramientas.Any(e => e.ID == id);
        }
    }
}

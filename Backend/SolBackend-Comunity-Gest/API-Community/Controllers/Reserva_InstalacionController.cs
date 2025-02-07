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
    public class Reserva_InstalacionController : ControllerBase
    {
        private readonly Context_DB _context;

        public Reserva_InstalacionController(Context_DB context)
        {
            _context = context;
        }

        // GET: api/Reserva_Instalacion
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reserva_Instalacion>>> GetReserva_Instalaciones()
        {
            return await _context.Reserva_Instalaciones
                .Include(r=>r.Instalacion)
                .Include(r=>r.Usuario)
                .ToListAsync();
        }

        // GET: api/Reserva_Instalacion/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reserva_Instalacion>> GetReserva_Instalacion(int id)
        {
            var reserva_Instalacion = await _context.Reserva_Instalaciones.FindAsync(id);

            if (reserva_Instalacion == null)
            {
                return NotFound();
            }

            return reserva_Instalacion;
        }

        // PUT: api/Reserva_Instalacion/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReserva_Instalacion(int id, Reserva_Instalacion reserva_Instalacion)
        {
            if (id != reserva_Instalacion.ID)
            {
                return BadRequest();
            }

            _context.Entry(reserva_Instalacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Reserva_InstalacionExists(id))
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

        // POST: api/Reserva_Instalacion
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Reserva_Instalacion>> PostReserva_Instalacion(Reserva_Instalacion reserva_Instalacion)
        {
            _context.Reserva_Instalaciones.Add(reserva_Instalacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReserva_Instalacion", new { id = reserva_Instalacion.ID }, reserva_Instalacion);
        }

        // DELETE: api/Reserva_Instalacion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReserva_Instalacion(int id)
        {
            var reserva_Instalacion = await _context.Reserva_Instalaciones.FindAsync(id);
            if (reserva_Instalacion == null)
            {
                return NotFound();
            }

            _context.Reserva_Instalaciones.Remove(reserva_Instalacion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Reserva_InstalacionExists(int id)
        {
            return _context.Reserva_Instalaciones.Any(e => e.ID == id);
        }
    }
}

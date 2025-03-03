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
    public class HorariosController : ControllerBase
    {
        private readonly Context_DB _context;

        public HorariosController(Context_DB context)
        {
            _context = context;
        }

        // GET: api/Horarios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Horario>>> GetHorarios()
        {
            return await _context.Horarios
                .Where(h=>h.Estado==true)
                
                .ToListAsync();
        }

        // GET: api/Horarios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Horario>> GetHorario(int id)
        {
            var horario = await _context.Horarios.FindAsync(id);

            if (horario == null)
            {
                return NotFound();
            }

            return horario;
        }

        // PUT: api/Horarios/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHorario(int id, Horario horario)
        {
            if (id != horario.ID)
            {
                return BadRequest();
            }

            _context.Entry(horario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HorarioExists(id))
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

        // POST: api/Horarios
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Horario>> PostHorario(Horario horario)
        {
            _context.Horarios.Add(horario);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHorario", new { id = horario.ID }, horario);
        }

        // DELETE: api/Horarios/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHorario(int id)
        {
            var horario = await _context.Horarios.FindAsync(id);
            if (horario == null)
            {
                return NotFound();
            }

            _context.Horarios.Remove(horario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HorarioExists(int id)
        {
            return _context.Horarios.Any(e => e.ID == id);
        }
    }
}

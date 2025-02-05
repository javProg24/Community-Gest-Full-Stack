using Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Context
{
    public partial class Context_DB:DbContext
    {
        public DbSet<Usuario> Usuarios {  get; set; }
        public DbSet<Instalacion> Instalaciones {  get; set; }
        public DbSet<Herramienta>Herramientas { get; set; }
        public DbSet<Reporte> Reportes {  get; set; }
        public DbSet<Reserva_Instalacion> Reserva_Instalaciones { get; set; }
        public DbSet<Reserva_Herramienta> Reserva_Herramientas { get; set; }
        public Context_DB(DbContextOptions<Context_DB>options):base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Reserva_Instalacion>()
                .HasOne(r => r.Usuario)
                .WithMany(u => u.Reserva_Instalaciones)
                .HasForeignKey(r => r.Usuario_ID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Reserva_Instalacion>()
                .HasOne(r => r.Instalacion)
                .WithMany(i => i.Reserva_Instalaciones)
                .HasForeignKey(r => r.Instalacion_ID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Reserva_Herramienta>()
                .HasOne(r => r.Usuario)
                .WithMany(u => u.Reservas_Herramientas)
                .HasForeignKey(r => r.Usuario_ID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Reserva_Herramienta>()
                .HasOne(r => r.Herramienta)
                .WithMany(h => h.Reservas_Herramientas)
                .HasForeignKey(r => r.Herramienta_ID)
                .OnDelete(DeleteBehavior.Restrict);
            ////////////////////////////////////////////////////
            base.OnModelCreating(modelBuilder);
        }
    }
}

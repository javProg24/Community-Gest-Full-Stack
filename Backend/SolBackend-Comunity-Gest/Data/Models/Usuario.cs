using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Data.Models
{
    public partial class Usuario
    {
        public int ID { get; set; }
        public int Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set;}
        public string Correo { get; set;}
        public int Telefono { get; set;}
        public bool Estado { get; set;}
        [JsonIgnore]
        public virtual ICollection<Reserva_Herramienta> Reservas_Herramientas { get; set; }
        [JsonIgnore]
        public virtual ICollection<Reserva_Instalacion> Reserva_Instalaciones { get; set; }
    }
}

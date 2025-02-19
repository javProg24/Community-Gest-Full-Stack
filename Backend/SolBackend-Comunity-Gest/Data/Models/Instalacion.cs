using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Data.Models
{
    public partial class Instalacion
    {
        public int ID { get; set; }
        public string Nombre { get; set; }
        public string Tipo { get; set; }
        public int Capacidad { get; set; }
        public string Descripcion { get; set; }
        public string Dia { get; set;}
        public TimeSpan Hora_Inicio { get; set; }
        public TimeSpan Hora_Fin {  get; set; }
        public bool Estado { get; set; }
        [JsonIgnore]
        public virtual ICollection<Reserva_Instalacion> Reserva_Instalaciones {  get; set; } = new List<Reserva_Instalacion>();
    }
}

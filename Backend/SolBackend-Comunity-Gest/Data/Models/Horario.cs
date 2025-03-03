using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Data.Models
{
    public partial class Horario
    {
        public int ID { get; set; }
        public int Instalacion_ID { get; set; }
        public TimeSpan Hora_Inicio { get; set; }
        public TimeSpan Hora_Fin { get; set; }
        public string Dia { get; set; }
        public bool Estado { get; set; }
        public virtual Instalacion? Instalacion { get; set; } = null;
        [JsonIgnore]
        public virtual ICollection<Reserva_Instalacion> Reserva_Instalaciones { get; set; } = new List<Reserva_Instalacion>();
    }
}

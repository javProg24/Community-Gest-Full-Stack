using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Data.Models
{
    public partial class Herramienta
    {
        public int ID { get; set; }
        public string Nombre { get; set; }
        public string Ubicacion { get; set; }
        public string Descripcion { get; set; }
        public int Cantidad { get; set; }
        public bool Estado { get; set; }
        [JsonIgnore]
        public virtual ICollection<Reserva_Herramienta> Reservas_Herramientas { get; set; } = new List<Reserva_Herramienta>();
    }
}

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
        public bool Estado { get; set; }
        [JsonIgnore]
        public virtual ICollection<Horario> Horarios {  get; set; } = new List<Horario>();
    }
}

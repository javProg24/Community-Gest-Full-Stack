using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models.Entidades_Relacionadas
{
    public partial class Instalacion_Horario
    {   
        public int ID { get; set; } 
        public string Instalacion { get; set; }
        public string Dia { get; set; }
        public TimeSpan Hora_Inicio { get; set; }
        public TimeSpan Hora_Fin { get; set; }
        public bool Estado { get; set; }
    }
}

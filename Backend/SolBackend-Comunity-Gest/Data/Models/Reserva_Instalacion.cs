using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public partial class Reserva_Instalacion
    {
        public int ID { get; set; }
        public int Usuario_ID { get; set; }
        public int Instalacion_ID { get;set; }
        public DateOnly? Fecha {  get; set; }
        public char Disponibilidad { get; set; }
        public virtual Instalacion? Instalacion { get; set; } = null;
        public virtual Usuario? Usuario { get; set; } =null;
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public partial class Reserva_Herramienta
    {
        public int ID { get; set; }
        public int Usuario_ID { get; set; }
        public int Herramienta_ID { get; set; }
        public string Dia {  get; set; }
        public DateOnly? Fecha { get; set; }
        public TimeSpan Hora_Inicio { get; set; }
        public TimeSpan Hora_Fin {  get; set; }
        public char Disponibilidad { get; set; }
        public virtual Herramienta? Herramienta { get; set; }=null;
        public virtual Usuario? Usuario { get; set; }=null;
    }
}

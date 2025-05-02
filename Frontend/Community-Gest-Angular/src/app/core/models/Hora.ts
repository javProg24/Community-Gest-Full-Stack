//crear metodo que recoja el valor del campo de texto de las horas
// devuelve un string en este formato: 00:00
export function getHora(valor:Date):string{
    const hora_minutos=valor;
    const date:Date=hora_minutos;
    const hora=date.getHours();
    const minutos=date.getMinutes();
    const horaCompleta:string=`${hora.toString().padStart(2,'0')}:${minutos.toString().padStart(2,'0')}`;
    return horaCompleta
}
export function setHora(hora:string):Date{
    const [horas,minutos]=hora.split(":").map(Number);
    const date=new Date();
    date.setHours(horas,minutos,0,0);
    return date
}
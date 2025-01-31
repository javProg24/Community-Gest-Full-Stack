export interface Reporte{
    id?: number,
    titulo: string,
    descripcion: string,
    recurso_Afectado?: string, 
    estado: boolean,
}
export class ReporteTabla{
    id?=0;
    titulo = '';
    descripcion = '';
    recurso_Afectado = '';
    estado = false;
}
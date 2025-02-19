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
export const Reporte_Response={
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    recurso_Afectado: 'recurso_Afectado', 
    estado: 'estado',
}as const;
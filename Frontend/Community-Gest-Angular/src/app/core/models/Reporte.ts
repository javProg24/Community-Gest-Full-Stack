export interface Reporte{
    id?: number,
    titulo: string,
    descripcion: string,
    recurso_Afectado?: string, 
    estado: boolean,
}
export const ReporteTabla={
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    recurso_Afectado: 'recurso_Afectado', 
    estado: 'estado',
}as const;
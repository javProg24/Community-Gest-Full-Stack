export interface Instalacion{
    id?:number,
    nombre:string,
    tipo:string,
    capacidad:number,
    descripcion:string,
    dia:string,
    hora_Inicio:string,
    hora_Fin:string,
    estado:boolean
}  
export const InstalacionTabla={
    id:'id',
    nombre:'nombre',
    tipo:'tipo',
    capacidad:'capacidad',
    descripcion:'descripcion',
    dia:'dia',
    hora_Inicio:'hora_Inicio',
    hora_Fin:'hora_Fin',
    estado:'estado'
}as const;
export const days=[
    {value:'Lunes',label:'Lunes'},
    {value:'Martes',label:'Martes'},
    {value:'Miercoles',label:'Miercoles'},
    {value:'Jueves',label:'Jueves'},
    {value:'Viernes',label:'Viernes'},
    {value:'Sabado',label:'Sabado'},
    {value:'Domingo',label:'Domingo'}
]
    

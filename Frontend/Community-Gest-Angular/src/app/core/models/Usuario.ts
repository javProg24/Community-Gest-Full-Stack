import { FormControl, FormGroup } from "@angular/forms";
import { TablaColumna } from "./Tabla_Columna";

export interface Usuario{
    id?:number;
    cedula:number;
    nombre:string;
    apellido:string;
    correo:string;
    telefono:number;
    estado:boolean
}
export class UsuarioTabla{
    id?=0;
    cedula=0;
    nombre="";
    apellido="";
    correo="";
    telefono=0;
    estado=false;
}
export const UsuarioDatos={
    id:"id",
    cedula:"cedula",
    nombre:"nombre",
    apellido:"apellido",
    correo:"correo",
    telefono:"telefono",
    estado:"estado"
}as const;
export const tablaUsuario:TablaColumna<Usuario>[]=[
    {
        label:UsuarioDatos.id.toUpperCase(),
        def:UsuarioDatos.id,
        content:(row)=>row.id
    },
    {
        label:UsuarioDatos.cedula,
        def:UsuarioDatos.cedula,
        content:(row)=>'0'+row.cedula
    },
    {
        label:UsuarioDatos.nombre,
        def:UsuarioDatos.nombre,
        content:(row)=>row.nombre
    },
    {
        label:UsuarioDatos.apellido,
        def:UsuarioDatos.apellido,
        content:(row)=>row.apellido
    },
    {
        label:UsuarioDatos.correo,
        def:UsuarioDatos.correo,
        content:(row)=>row.correo
    },
    {
        label:UsuarioDatos.telefono,
        def:UsuarioDatos.telefono,
        content:(row)=>'0'+row.telefono
    },
    {
        label:UsuarioDatos.estado,
        def:UsuarioDatos.estado,
        content:(row)=>row.estado?'Activo':'Inactivo'
    },
]
interface UsuarioDataForm{
    nombre:FormControl<string>
    apellido:FormControl<string>
    correo:FormControl<string>
    telefono: FormControl<number|null>; 
}
export interface UsuarioForm {
    cedula: FormControl<number|null>; // Ahora es `number`
    datosUsuario: FormGroup<UsuarioDataForm>;
    estado?: FormControl<boolean|null>;
}
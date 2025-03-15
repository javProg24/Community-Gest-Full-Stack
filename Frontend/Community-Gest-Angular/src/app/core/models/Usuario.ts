import { FormControl, FormGroup } from "@angular/forms";
import { TableColumn } from "./Tabla_Columna";

export interface Usuario{
    id?:number;
    cedula:number;
    nombre:string;
    apellido:string;
    correo:string;
    telefono:number;
    estado:boolean
}
export const UsuarioTabla={
    id:"id",
    cedula:"cedula",
    nombre:"nombre",
    apellido:"apellido",
    correo:"correo",
    telefono:"telefono",
    estado:"estado"
}as const;
export const tablaUsuario:TableColumn<Usuario>[]=[
    {
        label:"id",
        def:"id",
        content:(row)=>row.id
    },
    {
        label:"cedula",
        def:"cedula",
        content:(row)=>row.cedula
    },
    {
        label:"nombre",
        def:"nombre",
        content:(row)=>row.nombre
    },
    {
        label:"apellido",
        def:"apellido",
        content:(row)=>row.apellido
    },
    {
        label:"correo",
        def:"correo",
        content:(row)=>row.correo
    },
    {
        label:"telefono",
        def:"telefono",
        content:(row)=>row.cedula
    },
    {
        label:"estado",
        def:"estado",
        content:(row)=>row.estado
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
import { FormControl, FormGroup } from "@angular/forms";

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
    nombre='';
    apellido='';
    correo='';
    telefono=0;
    estado=false;
}

export const Usuario_Response={
    id:'id',
    cedula:'cedula',
    nombre:'nombre',
    apellido:'apellido',
    correo:'correo',
    telefono:'telefono',
    estado:'estado'
}as const;

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
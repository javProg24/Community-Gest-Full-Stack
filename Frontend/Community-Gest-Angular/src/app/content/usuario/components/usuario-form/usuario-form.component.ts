import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { GenericFormComponent } from "../../../../shared/generic-form/generic-form.component";
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario, UsuarioForm } from '../../../../core/models/Usuario';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-usuario-form',
  imports: [MatCardModule, MatFormFieldModule,ReactiveFormsModule, GenericFormComponent,MatButtonModule,MatButton,MatFormField,MatInputModule,MatCheckboxModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit{
  isEdit=false
  currentID?:number
  form!:FormGroup
  private formBuilder = inject(NonNullableFormBuilder);
  constructor(private fb:FormBuilder,private dialogRef: MatDialogRef<UsuarioFormComponent>,
    @Inject('formData')public formData:Usuario|null,private notificacion:ToastrService,
    private service:UsuarioService)
    {}
    ngOnInit(): void {
      this.form=this.fb.group<UsuarioForm>({
        cedula:this.formBuilder.control(null,{validators:[Validators.required]}),
        datosUsuario:this.formBuilder.group({
          nombre:this.formBuilder.control('',{validators:[Validators.required]}),
          apellido:this.formBuilder.control('',{validators:[Validators.required]}),
          correo:this.formBuilder.control('',{validators:[Validators.required]}),
          telefono:this.formBuilder.control<number | null>(null,{validators:[Validators.required]}),
        }),
        estado:this.formBuilder.control(null,{validators:[Validators.required]}),
      })
    
      if (this.formData) {
        this.isEdit = true;
        this.currentID = this.formData.id;
        this.form.setValue({
          cedula: this.formData.cedula || null, // Si no existe cedula, asignamos null
          datosUsuario: {
            nombre: this.formData.nombre,
            apellido: this.formData.apellido,
            correo: this.formData.correo,
            telefono: this.formData.telefono || null // Si no existe telefono, asignamos null
          },
          estado: this.formData.estado
        });
      } else {
        this.isEdit = false;
      }
    }
    
  onSubmit() {
    const { datosUsuario, ...formValues } = this.form.value; //tuve que pedir a ia que me destruyera el arreglo
    const usuario:Usuario={
      ...formValues,
      id:this.isEdit?this.currentID:0,
      cedula: this.form.value.cedula,
      nombre: this.form.value.datosUsuario.nombre,  // Accediendo explícitamente a los valores dentro de datosUsuario
      apellido: this.form.value.datosUsuario.apellido,  // Accediendo explícitamente a los valores dentro de datosUsuario
      correo: this.form.value.datosUsuario.correo,  // Accediendo explícitamente a los valores dentro de datosUsuario
      telefono: this.form.value.datosUsuario.telefono,  // Accediendo explícitamente a los valores dentro de datosUsuario
      estado: this.form.value.estado
    }
    this.isEdit?this.actualizarUsuario(usuario):this.agregarUsuario(usuario)
  }
  actualizarUsuario(usuario:Usuario){
    if(!this.currentID)
      return
    this.service.updateUsuario(this.currentID,usuario).subscribe({
      next:()=>{
        this.notificacion.info("El usuario fue actualizado",'Informacion')
      },
      error:(err)=>{
        this.notificacion.error("El usuario no se actualizo",err)
      }
    })
  }
  agregarUsuario(usuario:Usuario){
    console.log(usuario)
    this.service.addUsuario(usuario).subscribe({
      next:()=>{
        this.notificacion.success("El usuario fue agregado",'Exito!')
        this.dialogRef.close(true);
      },
      error:(err)=>{
        this.notificacion.error("El usuario no se agrego",err)
      }
    })
  }
  onCancel() {
    this.notificacion.warning("Operacion cancelada","Advertencia")
    this.dialogRef.close("Cancelado")
  }
}
import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { GenericFormComponent } from "../../../../shared/generic-form/generic-form.component";
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario, UsuarioForm } from '../../../../core/models/Usuario';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UsuarioService } from '../../service/usuario.service';
import { NotificationService } from '../../../../shared/notification/notification.service';

@Component({
  selector: 'app-usuario-form',
  imports: [MatCardModule, MatFormFieldModule,ReactiveFormsModule, GenericFormComponent,MatButtonModule,MatButton,MatFormField,MatInputModule,MatCheckboxModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit{
  protected isEdit=false
  private currentID?:number
  form!:FormGroup
  private formBuilder = inject(NonNullableFormBuilder);
  constructor(private fb:FormBuilder,private dialogRef: MatDialogRef<UsuarioFormComponent>,@Inject('formData')public formData:Usuario|null,private service:UsuarioService,private notificacion:NotificationService)
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
      estado:this.formBuilder.control(true,{validators:[Validators.required]}),
    })
    this.formData?this.editarUsuario(this.formData):this.isEdit = false;
  }
  private editarUsuario(datos:Usuario) {
    this.isEdit = true;
    this.currentID=datos.id
    this.form.setValue({
      cedula: datos.cedula, 
      datosUsuario: {
        nombre: datos.nombre,
        apellido: datos.apellido,
        correo: datos.correo,
        telefono: datos.telefono
      },
      estado: datos.estado
    })
  }
  private constructorUsuario():Usuario{
    const { datosUsuario, ...formValues } = this.form.value;
    const usuario:Usuario={
      ...formValues,
      id:this.isEdit?this.currentID:0,
      cedula: this.form.value.cedula,
      nombre: this.form.value.datosUsuario.nombre,  // Accediendo explícitamente a los valores dentro de datosUsuario
      apellido: this.form.value.datosUsuario.apellido,  
      correo: this.form.value.datosUsuario.correo, 
      telefono: this.form.value.datosUsuario.telefono,  
      estado: this.form.value.estado
    }
    return usuario
  }
  onSubmit() {
    this.isEdit?this.actualizarUsuario(this.constructorUsuario()):this.agregarUsuario(this.constructorUsuario())
  }
  private actualizarUsuario(usuario:Usuario){
    if(!this.currentID)return
    this.service.updateUsuario(this.currentID,usuario).subscribe({
      next:()=>{
        this.notificacion.showActualizado("El usuario fue actualizado",this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError("El usuario no se actualizo",err)
      }
    })
  }
  private agregarUsuario(usuario:Usuario){
    this.service.addUsuario(usuario).subscribe({
      next:()=>{
        this.notificacion.showAgregado("El usuario fue agregado",this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError("El usuario no se agrego",err)
      }
    })
  }
  onCancel() {
    this.notificacion.showWarning("Operacion cancelada",this.dialogRef)
  }
}
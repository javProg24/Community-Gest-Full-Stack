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

@Component({
  selector: 'app-usuario-form',
  imports: [MatCardModule, MatFormFieldModule, 
    ReactiveFormsModule, GenericFormComponent,
    MatButtonModule,MatButton,MatFormField,MatInputModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit{

  
  isEdit=false
  form!:FormGroup
  private formBuilder = inject(NonNullableFormBuilder);
  constructor(private fb:FormBuilder,
    private dialogRef: MatDialogRef<UsuarioFormComponent>,
    @Inject('formData')public formData:Usuario|null,
    private toastr:ToastrService){}
  ngOnInit(): void {
    this.form=this.fb.group<UsuarioForm>({
      cedula:this.formBuilder.control('',{validators:[Validators.required]}),
      datosUsuario:this.formBuilder.group({
        nombre:this.formBuilder.control('',{validators:[Validators.required]}),
        apellido:this.formBuilder.control('',{validators:[Validators.required]}),
        correo:this.formBuilder.control('',{validators:[Validators.required]}),
        telefono:this.formBuilder.control('',{validators:[Validators.required]}),
      })
    })
  }
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  onCancel() {
    this.toastr.warning("Operacion cancelada","Advertencia")
    this.dialogRef.close("Cancelado")
  }
}

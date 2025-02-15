import { NgComponentOutlet } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, Injector, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog-form',
  imports: [MatCardModule,MatButtonModule,NgComponentOutlet,MatIconModule,MatDialogModule],
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.css'
})
export class DialogFormComponent implements OnInit{
  onCancel() {
    this.toastr.warning("Operacion cancelada","Advertencia")
    this.dialogRef.close("Cancelado")
  }
  customInjector!:Injector;
  constructor(public dialogRef:MatDialogRef<DialogFormComponent>,
    private injector:Injector,
    @Inject(MAT_DIALOG_DATA)public data:{component:any;formData?:any},
    private toastr:ToastrService
  ){}
  ngOnInit(): void {
    this.customInjector=Injector.create({
      providers:[
        {provide:'formData',useValue:this.data.formData},
      ],
      parent:this.injector
    })
  }
  closeDialog(){
    this.dialogRef.close()
  }
}

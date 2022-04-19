import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
public titulo:string;
public user:any;
  constructor() {
    this.titulo="Formulario"
    this.user={
      nombre:"",
      apellidos:"",
      descripcion:""
      
    };
   }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Formulario enviado");
    console.log(this.user);
  }

}

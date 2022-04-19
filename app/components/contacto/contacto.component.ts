import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
public titulo:string;
public nombre:string;
public apellidos:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router


  ){
this.titulo="Contactame";
this.nombre="";
this.apellidos="";


  }

  ngOnInit(){
    this._route.params.subscribe((params: Params) => {
             console.log(params);
             this.nombre= params.nombre;
             this.apellidos=params.apellidos;
    });
  }
  redireccion(){
  // this._router.navigate(['/formulario']);
  this._router.navigate(['/contacto', 'adri', 'Robles'])
  }

}

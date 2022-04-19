import { Injectable } from "@angular/core";
import { Pelicula } from "src/app/models/pelicula";


@Injectable()
export class PeliculaService{
    holaMundo(){
        return 'Hola Mundo desde un servicio de Angular!!!';
    }
}
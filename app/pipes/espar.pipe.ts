import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'espar'

})
export class EsParPipe implements PipeTransform{
    transform(value: any){
        return "El ano de la pelicula es:"+value;
    }
}
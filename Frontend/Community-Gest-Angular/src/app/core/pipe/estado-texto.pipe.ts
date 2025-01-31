import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoTexto'
})
export class EstadoTextoPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Solucionado' : 'Sin Solucionar';
  }

}

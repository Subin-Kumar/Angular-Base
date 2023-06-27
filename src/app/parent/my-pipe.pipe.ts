import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, character: string): string {
    return value.replace(character,'$')
  }

}

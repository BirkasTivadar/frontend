import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: string, pre: string = "Mr."): string {
    return `${pre} ${value}`;
  }

}

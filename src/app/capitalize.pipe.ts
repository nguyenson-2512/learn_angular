import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(text: string, numLetters: number) {
    if(numLetters === null) {
      return text.toUpperCase();
    } else {
      return (
        text.substring(0, numLetters).toUpperCase() +
        text.substring(numLetters, text.length)
      );
    }
  }
}

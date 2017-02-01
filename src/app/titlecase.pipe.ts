import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'titlecase'})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    return value.split(/\b/g).map(word => this.titleCaseWord(word)).join('');
  }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
}

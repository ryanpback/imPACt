import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'party',
  pure: false
})
export class PartyPipe implements PipeTransform {

  transform(candidates, choice ): any {
    if(candidates) {
      if(choice === 'all') {
        return candidates;
      }
      else if(choice === 'other') {
        return candidates.filter(function(candidate) {
          return candidate.General_Party.General_Party !== 'Democratic' && candidate.General_Party.General_Party !== 'Republican' && candidate.General_Party.General_Party !== 'Independent';
        })
      }
      return candidates.filter(function(candidate) {
        return candidate.General_Party.General_Party === choice;
      })
    }
  }

}

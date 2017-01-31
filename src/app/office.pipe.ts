import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'office',
  pure: false
})
export class OfficePipe implements PipeTransform {

  transform(candidates, office: string): any {
    if(candidates) {
      console.log(office)
      if(office === "senate") {
        return candidates.filter(function(candidate) {
          return candidate.Office_Sought.Office_Sought.match(/(US SENATE\W.+)/g)
        })
      }
      else if(office === "house") {
        return candidates.filter(function(candidate) {
          return candidate.Office_Sought.Office_Sought.match(/(US HOUSE\W.+)/g)
        })
      }
      else if(office === "governor") {
        return candidates.filter(function(candidate) {
          return candidate.Office_Sought.Office_Sought.match(/(GOVERNOR)/g)
        })
      }
      else {
        return candidates;
      }
    }
  }

}

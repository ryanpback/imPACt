import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'office',
  pure: false
})
export class OfficePipe implements PipeTransform {

  transform(candidates, office: string): any {
    if(candidates) {
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
      else if(office === "other") {
        return candidates.filter(function(candidate) {
          return !candidate.Office_Sought.Office_Sought.match(/(US SENATE\W.+)|(US HOUSE\W.+)|(GOVERNOR)/g)
        })
      }
      else {
        return candidates;
      }
    }
  }

}

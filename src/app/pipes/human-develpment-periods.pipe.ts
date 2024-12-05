import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanDevelpmentPeriods'
})
export class HumanDevelpmentPeriodsPipe implements PipeTransform {

  transform(value: string | number): unknown {
    const val = typeof value === 'string' ? +value : value;
    let humanPeriod = '';

    if (val > 20 && val < 40) {
      humanPeriod = 'Early Adulthood';
    }else if (val >= 40 && val < 65) {
      humanPeriod = 'Middle Adulthood';
    }else if (val > 65) {
      humanPeriod = 'Late Adulthood';
    }

    return `${value} - ${humanPeriod}`;
  }

}

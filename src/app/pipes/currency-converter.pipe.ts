import { Pipe, PipeTransform } from '@angular/core';

const COINS: 'USD' | 'MX' = 'USD';
@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(
    value: number,
    from: typeof COINS = 'MX',
    to = COINS,
    USD: number = 19.3
  ): string {

    let result: number = 0.0;

    if(from === 'MX'){
      result = value / USD
    } else if (from === 'USD'){
      result =value * USD
    }
    return `${to} - ${result.toFixed(2)}`;
  }

}

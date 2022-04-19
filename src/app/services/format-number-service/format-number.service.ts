import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatNumberService {

  constructor() { }

  formatNumber = (num: string) => {
    let number = parseInt(num);
    let e : any = (Math.abs(number)/1000).toFixed(1)
    return Math.abs(number) > 999 ? Math.sign(number)*e + 'K' : Math.sign(number)*Math.abs(number)
  }
}

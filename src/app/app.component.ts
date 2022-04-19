import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  constructor(private renderer: Renderer2) {}



  title = 'caseStudy';




  countAvatar(arr: any) {
    return arr.length > 2 ? false : true;
  }

  formatNumber = (num: string) => {
    let number = parseInt(num);
    let e : any = (Math.abs(number)/1000).toFixed(1)
    return Math.abs(number) > 999 ? Math.sign(number)*e + 'K' : Math.sign(number)*Math.abs(number)
  }


}

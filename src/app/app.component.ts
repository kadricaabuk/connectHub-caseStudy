import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  title = 'caseStudy';

  public array: any;
  ngOnInit() {
    this.array = data;
    console.log(this.array);
  }

  countAvatar(arr: any) {
    console.log(arr);
    return arr.length > 2 ? false : true;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  @Input() data?: any[];

  constructor() { }

  ngOnInit(): void {
    this.data = [ this.data ]
    console.log(this.data)
  }

}

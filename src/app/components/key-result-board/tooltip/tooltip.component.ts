import { Component, Input, OnInit } from '@angular/core';
import { FormatNumberService } from '../../../services/format-number-service/format-number.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  @Input() data?: any[]; //Parent Komponentten gelen veri

  constructor(public formatNumberService: FormatNumberService) { }

  ngOnInit(): void {
    this.data = [ this.data ] //Json formatında gelen veriyi array formatına çevirerek HTML'de sorunsuz çalışmasını sağladım
  }

}

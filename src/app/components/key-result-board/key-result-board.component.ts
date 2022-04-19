import { Component, Input, OnInit } from '@angular/core';
import { FormatNumberService } from '../../services/format-number-service/format-number.service';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-key-result-board',
  templateUrl: './key-result-board.component.html',
  styleUrls: ['./key-result-board.component.css']
})
export class KeyResultBoardComponent implements OnInit {

  constructor(public formatNumberService: FormatNumberService) { }

  // @Input()
  // formatNumber!: Function; //Parent Komponentten gelen veri

  public array: any;
  ngOnInit() {
    this.array = data;
    console.log(this.array);
  }


  countAvatar(arr: any) {
    return arr.length > 2 ? false : true;
  }



}

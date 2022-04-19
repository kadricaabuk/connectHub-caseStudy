import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //DROPDOWN ÜZERİNDEKİ BAŞLIĞI DEĞİŞTİREN FONKSİYON
  public choosenWidget : string = '';
  changeTitle(arg : string) {
    this.choosenWidget = arg;
  }

}

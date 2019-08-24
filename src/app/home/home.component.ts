import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  compInfo = {
    primarycontent: 'Changing the world, one nanometer at a time. ',
    // tslint:disable-next-line:max-line-length
    secondarycontent: 'ASML gives the world\'s leading chipmakers the power to mass produce patterns on silicon.| SML is an innovation leader in the semiconductor industry. We provide chipmakers with everything they need – hardware, software and services – to mass produce patterns on silicon through lithography.'
  };
  sInfo = [];

  constructor() { }

  ngOnInit() {
    this.sInfo = this.compInfo.secondarycontent.split('|');
  }

}

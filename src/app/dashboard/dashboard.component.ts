import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url: any;
  constructor() { }

  ngOnInit() {
    this.url = 'https://www.asml.com/en' + '&output=embed';
  }

}

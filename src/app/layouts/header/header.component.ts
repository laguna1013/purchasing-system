import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  day: String;
  time: String;

  ngOnInit(): void {
    setInterval(() => {
      this.day = moment().format('MMM DD ddd, YYYY');
      this.time = moment().format('hh:mm:ss');
    }, 1000)
  }

}

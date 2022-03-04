import { Component, OnInit } from '@angular/core';

import * as moment from 'moment-timezone';

@Component({
  selector: 'jv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    moment.locale('pt-br')
  }


}


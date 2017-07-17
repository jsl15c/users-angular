import { Component, OnInit } from '@angular/core';

import {MyCounterComponent} from '../my-counter/my-counter.component';
import {MyCounter2Component} from '../my-counter-2/my-counter-2.component';

@Component({
  selector: 'app-both-counters',
  templateUrl: './both-counters.component.html',
  styleUrls: ['./both-counters.component.css']
})
export class BothCountersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

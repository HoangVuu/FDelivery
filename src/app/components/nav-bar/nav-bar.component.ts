import { Component, OnInit } from '@angular/core';
import { STEP } from './nav-bar.constant';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  readonly STEP = STEP;

  selectedIndex = 0;

  ngOnInit(): void {
  }

  select(index: number) {
    console.log('vu le', index)
    this.selectedIndex = index;
  }
}

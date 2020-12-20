import { menu } from './left-bar.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {

  constructor() { }

  readonly menu = menu;

  selectedIndex = 0;

  ngOnInit(): void {
  }

  select(index: number) {
    console.log('vu le', index)
    this.selectedIndex = index;
  }
}


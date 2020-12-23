import { menu1, menu2 } from './left-bar.constant';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu } from './left-bar.interface'
@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {

  constructor(private router: Router) { }

  readonly menu1 = menu1;
  readonly menu2 = menu2;
  menu!: IMenu[];
  selectedIndex = 0;

  ngOnInit(): void {
    console.log(this.router.url); //  /routename

    if (this.router.url === 'conversation') {
      this.menu = menu2
    }
    else this.menu = menu1
  }

  select(index: number) {
    console.log(this.router.url); //  /routename

    if (this.router.url === '/conversation') {
      this.menu = menu2
    }
    else { this.menu = menu1 }

    console.log('vu le', index)
    this.selectedIndex = index;
  }
}


import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    // Handle hide and show name card when scroll
    const more = document.querySelectorAll<HTMLElement>('.evaluate__info__top__more')[0];
    const info = document.querySelectorAll<HTMLElement>('.evaluate__info')[0];

    if (info.scrollTop === 0) {
      more.style.display = 'block';
    }
    else {
      more.style.display = 'none';
    }
  }
}

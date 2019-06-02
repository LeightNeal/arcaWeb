import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styles: []
})
export class LostComponent implements OnInit {
  show = false;

  constructor() { }

  ngOnInit() {
  }

  changeState(state: boolean) {
    this.show = state;
  }
}

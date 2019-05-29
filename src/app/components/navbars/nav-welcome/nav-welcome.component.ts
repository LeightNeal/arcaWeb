import { Component, OnInit, ViewChild, ElementRef, OnChanges, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-welcome',
  templateUrl: './nav-welcome.component.html',
  styles: []
})
export class NavWelcomeComponent implements OnInit {

  toggled = false;

  constructor() {}

  ngOnInit() {
  }


}

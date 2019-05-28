import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav-welcome',
  templateUrl: './nav-welcome.component.html',
  styles: []
})
export class NavWelcomeComponent implements OnInit {

  @ViewChild('sideMenu') menuSide: ElementRef;

  constructor() {}

  ngOnInit() {
  }

  changeClass() {
    this.menuSide.nativeElement.classList.toggle('nav-active');
    console.log('botón cliqueado');
  }
}

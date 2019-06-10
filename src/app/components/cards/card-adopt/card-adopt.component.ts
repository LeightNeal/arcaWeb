import { Component, OnInit, Input } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';

@Component({
  selector: 'app-card-adopt',
  templateUrl: './card-adopt.component.html',
  styles: []
})
export class CardAdoptComponent implements OnInit {
  @Input() mascota: Mascota;

  constructor() { }

  ngOnInit() {
  }

}

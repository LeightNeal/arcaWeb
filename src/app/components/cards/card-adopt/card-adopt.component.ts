import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';

@Component({
  selector: 'app-card-adopt',
  templateUrl: './card-adopt.component.html',
  styles: []
})
export class CardAdoptComponent implements OnInit {
  @Input() mascota: Mascota;
  @Input() login: any;
  @Output() adopt: EventEmitter<boolean>;

  constructor() {
    this.adopt = new EventEmitter();
  }

  ngOnInit() {
  }

  sendModalRequest() {
    this.adopt.emit(true);
  }

}

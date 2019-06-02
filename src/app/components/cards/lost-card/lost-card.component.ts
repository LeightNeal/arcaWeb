import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lost-card',
  templateUrl: './lost-card.component.html',
  styles: []
})
export class LostCardComponent implements OnInit {
  @Output() emitModal: EventEmitter<boolean>;

  constructor() { 
    this.emitModal = new EventEmitter();
  }

  ngOnInit() {
  }

  showModal() {
    this.emitModal.emit(true);
  }

}

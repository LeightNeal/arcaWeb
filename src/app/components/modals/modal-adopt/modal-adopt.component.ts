import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-adopt',
  templateUrl: './modal-adopt.component.html',
  styles: []
})
export class ModalAdoptComponent implements OnInit {
  @Output() closeModal: EventEmitter<boolean>;

  constructor() { 
    this.closeModal = new EventEmitter();
  }

  ngOnInit() {
  }

  sendCloseModal() {
    this.closeModal.emit(false);
  }

}

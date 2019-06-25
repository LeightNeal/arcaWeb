import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';

@Component({
  selector: 'app-modal-adopt',
  templateUrl: './modal-adopt.component.html',
  styles: []
})
export class ModalAdoptComponent implements OnInit {
  @Output() closeModal: EventEmitter<any>;
  @Input() mascota: Mascota;

  constructor() { 
    this.closeModal = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.mascota)
  }

  sendCloseModal() {
    this.closeModal.emit({mascota: this.mascota, mostrarModal: false});
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-mine',
  templateUrl: './modal-mine.component.html',
  styles: []
})
export class ModalMineComponent implements OnInit {
  @Output() emitState: EventEmitter<boolean>;

  constructor() { 
    this.emitState = new EventEmitter();
  }

  ngOnInit() {
  }

  bindState(state: boolean) {
    this.emitState.emit(state);
  }
}

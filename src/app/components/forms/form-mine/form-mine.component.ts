import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-mine',
  templateUrl: './form-mine.component.html',
  styles: []
})
export class FormMineComponent implements OnInit {
  @Output() closeModal: EventEmitter<boolean>;
  formMine: FormGroup;

  constructor() {
    this.closeModal = new EventEmitter();
    this.formMine = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, Validators.required),
      'comment': new FormControl(null, Validators.required)
    });
    this.formMine.markAsUntouched();
  }

  ngOnInit() {
  }

  emitCloseModal() {
    this.closeModal.emit(false);
  }

}

import { Component, OnInit } from '@angular/core';
import { Perdido } from 'src/app/models/perdido';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styles: []
})
export class LostComponent implements OnInit {
  show = false;
  perdidos: Perdido[];
  elegido: Perdido;

  constructor(private petService: PetService) {
    this.petService.obtenerMascotarPerdidas()
    .subscribe((data: Perdido[]) => this.perdidos = data, error => console.log(error));
  }

  ngOnInit() {
  }

  changeState(state: any) {
    this.show = state.mostrarModal;
    this.elegido = state.perdido;
  }
}

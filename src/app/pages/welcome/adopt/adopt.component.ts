import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Mascota } from 'src/app/models/mascota';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styles: []
})
export class AdoptComponent implements OnInit {

  mascotas: Mascota[];

  constructor(private petService: PetService) {
  }

  ngOnInit() {}

  buscarMascotas(busqueda: any) {
    this.petService.buscarMascotarPorFiltro(busqueda.tipo, busqueda.sexo)
    .subscribe((data: Mascota[]) => {
      this.mascotas = data;
      console.log(this.mascotas);
    }, error => console.log(error));
  }

}

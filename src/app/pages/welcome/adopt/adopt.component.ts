import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Mascota } from 'src/app/models/mascota';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styles: []
})
export class AdoptComponent implements OnInit {

  mascotas: Mascota[];
  usuario: Usuario;
  showModal: boolean;
  mascotaElegida: Mascota;

  constructor(private petService: PetService) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));
    this.showModal = false;
  }

  ngOnInit() {}

  buscarMascotas(busqueda: any) {
    this.petService.buscarMascotasPorFiltro(busqueda.tipo, busqueda.sexo)
    .subscribe((data: Mascota[]) => {
      this.mascotas = data;
      console.log(this.mascotas);
    }, error => console.log(error));
  }

  changeState(evento: any) {
    this.showModal = evento.mostrarModal;
    this.mascotaElegida = evento.mascota;
  }

}

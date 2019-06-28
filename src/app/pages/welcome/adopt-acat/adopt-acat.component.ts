import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Mascota } from 'src/app/models/mascota';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-adopt-acat',
  templateUrl: './adopt-acat.component.html',
  styles: []
})
export class AdoptACatComponent implements OnInit {
  gatos: Mascota[];
  usuario: Usuario;
  mostrarModal: boolean;
  mascotaElegida: Mascota;

  constructor(private petService: PetService) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));
    this.petService.buscarMascotasPorTipo('Felino')
    .subscribe((data: Mascota[]) => this.gatos = data, error => console.log(error));
  }

  ngOnInit() {
  }

  changeState(evento: any) {
    this.mostrarModal = evento.mostrarModal;
    this.mascotaElegida = evento.mascota;
  }
}

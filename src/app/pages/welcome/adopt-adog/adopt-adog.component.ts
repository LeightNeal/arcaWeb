import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { PetService } from 'src/app/services/pet.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-adopt-adog',
  templateUrl: './adopt-adog.component.html',
  styles: []
})
export class AdoptADogComponent implements OnInit {
  perros: Mascota[];
  usuario: Usuario;
  mostrarModal: boolean;
  mascotaElegida: Mascota;

  constructor(private petService: PetService) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));
    this.petService.buscarMascotasPorTipo('Canino').subscribe(
      (data: Mascota[]) => this.perros = data, error => console.log(error)
    );
  }

  ngOnInit() {
  }

  changeState(evento: any) {
    this.mostrarModal = evento.mostrarModal;
    this.mascotaElegida = evento.mascota;
  }
}

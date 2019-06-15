import { Component, OnInit, ViewChild, ElementRef, OnChanges, HostListener } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-welcome',
  templateUrl: './nav-welcome.component.html',
  styles: []
})
export class NavWelcomeComponent implements OnInit {

  toggled = false;
  nombre: string;
  usuario: Usuario;

  constructor(private authService: AuthService) {
    this.usuario = JSON.parse(localStorage.getItem('usuarioActual'));
    this.nombre = this.usuario.nombre.split(' ')[0];
    console.log(this.nombre);
  }

  ngOnInit() {
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
    this.nombre = null;
    this.usuario = null;
  }

}

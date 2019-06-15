import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styles: []
})
export class FormLoginComponent implements OnInit {
  @ViewChild('txtEmail') email: ElementRef;
  @ViewChild('txtPassword') password: ElementRef;

  constructor(private authService: AuthService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    console.log(this.email);
    console.log(this.password);
  }

  async iniciarSesion() {
    if (this.email.nativeElement.value !== '' && this.password.nativeElement.value !== '') {
      try {
        const usuario = await this.authService.iniciarSesion(`${this.email.nativeElement.value}`, `${this.password.nativeElement.value}`);
        if (usuario) {
          const usuarioRegistro = await this.usuarioService.obtenerUsuario(usuario.user.uid);
          usuarioRegistro.subscribe(
            data => {
              alert('Iniciaste sesión');
              localStorage.setItem('usuarioActual', JSON.stringify(data));
            }, error => console.log(error));
        }
      } catch (error) {
        alert('Error al iniciar sesión.');
      }
    } else {
      alert('Llena todos los campos');
    }
  }

}

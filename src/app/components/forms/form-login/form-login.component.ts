import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styles: []
})
export class FormLoginComponent implements OnInit {
  @ViewChild('txtEmail') email: ElementRef;
  @ViewChild('txtPassword') password: ElementRef;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.email);
    console.log(this.password);
  }

  iniciarSesion() {
    if (this.email.nativeElement.value !== '' && this.password.nativeElement.value !== '') {
      this.authService
      .iniciarSesion(`${this.email.nativeElement.value}`, `${this.password.nativeElement.value}`)
      .then( data => {
        alert('Iniciaste sesión');
        this.email.nativeElement.value = '';
        this.password.nativeElement.value = '';
      })
      .catch( error => alert('Error al iniciar sesión') );
    } else {
      alert('Llena todos los campos');
    }
  }

}

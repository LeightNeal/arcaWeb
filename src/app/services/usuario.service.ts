import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private database: AngularFireDatabase) { }

  crearUsuario(usuario: Usuario) {
    return this.database.database.ref(`usuarios/${usuario.id}`).set(usuario);
  }

}

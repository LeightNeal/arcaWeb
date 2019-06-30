import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { SolicitudAdopcion } from '../models/solicitud-adopcion';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private database: AngularFireDatabase) { }

  crearSolicitud(solicitud: SolicitudAdopcion) {
    return this.database.database.ref(`solicitudesAdopcion/${solicitud.id}`).set(solicitud);
  }

}

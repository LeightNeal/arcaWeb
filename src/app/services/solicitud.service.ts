import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { SolicitudAdopcion } from '../models/solicitud-adopcion';
import { SolicitudPerdido } from '../models/solicitud-perdido';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private database: AngularFireDatabase) { }

  crearSolicitud(solicitud: SolicitudAdopcion) {
    return this.database.database.ref(`solicitudesAdopcion/${solicitud.id}`).set(solicitud);
  }

  crearSolicitudPerdido(solicitud: SolicitudPerdido) {
    return this.database.database.ref(`solicitudesPerdido/${solicitud.id}`).set(solicitud);
  }
}

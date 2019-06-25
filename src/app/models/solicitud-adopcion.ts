import { Mascota } from './mascota';

export class SolicitudAdopcion {
    constructor(
        public status: string,
        public mascota: Mascota,
        public datosPersonales?: any,
        public respuestas?: any
    ) {}
}
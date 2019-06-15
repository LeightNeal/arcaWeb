export class Usuario {
    constructor(
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public correo: string,
        public fecha: string,
        public id?: string,
    ) {}
}

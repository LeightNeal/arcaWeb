import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Jumbotron } from 'src/app/models/jumbotron';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: []
})
export class LandingComponent implements OnInit {
  jumbotron: Jumbotron;

  constructor(private solicitudService: SolicitudService) {
    this.solicitudService.obtenerJumbotron('home').
    subscribe((data: Jumbotron) => this.jumbotron = data, error => console.log(error));
  }

  ngOnInit() {
  }

}

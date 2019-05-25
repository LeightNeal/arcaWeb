import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styles: []
})
export class AdoptComponent implements OnInit {

  types = [
    {img: '../../../assets/imgperroAdopcion4444.jpg', description: 'Adopta a un perro', link: ''},
    {img: 'src/assets/img/gatoAdopcion111.jpg', description: 'Adopta a un gato'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

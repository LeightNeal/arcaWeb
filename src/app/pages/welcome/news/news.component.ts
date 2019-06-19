import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {
  noticias: Noticia[];

  constructor(private noticiaService: NoticiaService) {
    this.noticiaService.obtenerNoticias().subscribe(
      (data: Noticia[]) => {
        this.noticias = data;
        console.log(this.noticias);
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Tip } from 'src/app/models/tip';
import { TipService } from 'src/app/services/tip.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styles: []
})
export class TipsComponent implements OnInit {
  tips: Tip[];

  constructor(private tipService: TipService) {
    this.tipService.obtenerTips()
    .subscribe( (data: Tip[]) => this.tips = data, error => console.log(error));
  }

  ngOnInit() {
  }

}

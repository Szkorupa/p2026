import { Component } from '@angular/core';

@Component({
  selector: 'app-animacjatrzecia',
  standalone: false,
  templateUrl: './animacjatrzecia.html',
  styleUrl: './animacjatrzecia.css',
})
export class Animacjatrzecia {
  nazwaAnimacji: string = 'Animacja Trzecia - Owocki';
  nazwaEfektu: string = '3 transformacje CSS';
  foto: string = 'public/zdjecia/t3.jpg';

  skew = false;
  rotate = false;
  scale = false;

  toggleSkew() {
    this.skew = !this.skew;
  }

  toggleRotate() {
    this.rotate = !this.rotate;
  }

  toggleScale() {
    this.scale = !this.scale;
  }
}

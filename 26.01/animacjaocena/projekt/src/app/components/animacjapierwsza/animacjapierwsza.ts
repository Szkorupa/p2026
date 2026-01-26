import { Component } from '@angular/core';

@Component({
  selector: 'app-animacjapierwsza',
  standalone: false,
  templateUrl: './animacjapierwsza.html',
  styleUrl: './animacjapierwsza.css',
})
export class Animacjapierwsza {
  nazwaAnimacji: string = 'Animacja Pierwsza - Owocki';
  nazwaEfektu: string = '3 różne animacje';
  foto: string = 'public/zdjecia/t2.jpg';

  rotate = false;
  translate = false;
  scale = false;

  toggleRotate() {
    this.rotate = !this.rotate;
  }

  toggleTranslate() {
    this.translate = !this.translate;
  }

  toggleScale() {
    this.scale = !this.scale;
  }
}

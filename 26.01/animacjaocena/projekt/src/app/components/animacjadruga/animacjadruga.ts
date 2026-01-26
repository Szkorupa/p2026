import { Component } from '@angular/core';

@Component({
  selector: 'app-animacjadruga',
  standalone: false,
  templateUrl: './animacjadruga.html',
  styleUrl: './animacjadruga.css',
})
export class Animacjadruga {
  nazwaAnimacji: string = 'Animacja Druga - Owocki';
  nazwaEfektu: string = '3 efekty CSS';
  foto: string = 'public/zdjecia/t1.jpg';

  sepia = false;
  gray = false;
  blur = false;

  toggleSepia() {
    this.sepia = !this.sepia;
  }

  toggleGray() {
    this.gray = !this.gray;
  }

  toggleBlur() {
    this.blur = !this.blur;
  }
}

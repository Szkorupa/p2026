import { Component } from '@angular/core';

@Component({
  selector: 'app-aniacjadruga',
  standalone: false,
  templateUrl: './aniacjadruga.html',
  styleUrl: './aniacjadruga.css',
})
export class Aniacjadruga {
  nazwaAnimacji: string = 'Animacja Druga - PZSNR 1';
  nazwaEfektu: string = 'Zmiana - opacity';
  foto: string = 'public/zdjecia/t2.jpg';

  opacity: boolean = false;

  toggleOpacity(){
    this.opacity = !this.opacity;
  }
}

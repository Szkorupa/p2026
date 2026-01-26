import { Component } from '@angular/core';

@Component({
  selector: 'app-aniacjapierwsza',
  standalone: false,
  templateUrl: './aniacjapierwsza.html',
  styleUrl: './aniacjapierwsza.css',
})
export class Aniacjapierwsza {
  nazwaAnimacji: string = 'Animacja Druga - PZSNR 1';
  nazwaEfektu: string = 'Zmiana - GrayScale';
  foto: string = 'public/zdjecia/t1.jpg';

  zoom: boolean = false;

  toggleZoom(){
    this.zoom = !this.zoom;
  }
}
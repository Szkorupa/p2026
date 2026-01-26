import { Component } from '@angular/core';

@Component({
  selector: 'app-aniacjatrzecia',
  standalone: false,
  templateUrl: './aniacjatrzecia.html',
  styleUrl: './aniacjatrzecia.css',
})
export class Aniacjatrzecia {
  nazwaAnimacji: string = 'Animacja Druga - PZSNR 1';
  nazwaEfektu: string = 'Zmiana - GrayScale';
  foto: string = 'public/zdjecia/t3.jpg';

  grayscale: boolean = false;

  togglegrayscale(){
    this.grayscale = !this.grayscale;
  }
}
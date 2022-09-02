import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  @ViewChild('intro') intro: ElementRef | any;

  soyUnColor: boolean = false;
  public scrollToIntro() {
    this.intro.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });


  }

  cambiarColor() {

    this.soyUnColor = true;
  }

  vamosABerisso() {


    alert('Estas a punto a salir');

    window.open('http://berisso.gob.ar/');

  }

}

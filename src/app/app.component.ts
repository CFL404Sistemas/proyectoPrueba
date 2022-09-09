import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  @ViewChild('intro') intro: ElementRef | any;



  ngOnInit(): void {
    console.log(this.intro);


  }


  vamosABerisso() {


    alert('Estas a punto a salir');

    window.open('http://berisso.gob.ar/');

  }

}

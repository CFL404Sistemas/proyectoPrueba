import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-foto',
  templateUrl: './seccion-foto.component.html',
  styleUrls: ['./seccion-foto.component.scss']
})
export class SeccionFotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  vamosABerisso() {


    alert('Estas a punto a salir');

    window.open('http://berisso.gob.ar/');

  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() referenciaSeccion: any;



  constructor() { }

  ngOnInit(): void {
    console.log(this.referenciaSeccion);


  }


  scrollToIntro() {
    this.referenciaSeccion.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    }
    );


  }

}

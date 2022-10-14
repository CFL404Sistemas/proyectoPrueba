import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() seccionInfo: any;
  @Input() seccionContacto: any;
  constructor() { }

  ngOnInit(): void {
  }

  scrollHaciaInfo() {
    this.seccionInfo.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    }
    );


  }

  scrollHaciaContacto() {
    this.seccionContacto.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    }
    );
  }

}

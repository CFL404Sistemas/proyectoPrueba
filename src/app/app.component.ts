import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  @ViewChild('seccionInfo') seccionInfo: ElementRef | any;
  @ViewChild('seccionContacto') seccionContacto: ElementRef | any;



  ngOnInit(): void {



  }



}

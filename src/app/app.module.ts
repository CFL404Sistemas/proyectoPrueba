import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SeccionInformacionComponent } from './seccion-informacion/seccion-informacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SeccionFotoComponent } from './seccion-foto/seccion-foto.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    SeccionInformacionComponent,
    NavbarComponent,
    ContactComponent,
    SeccionFotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

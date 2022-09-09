import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  loginForm: FormGroup | any;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.required,
        ]
      ]
    });
  }


  onLogin() {


    if (this.loginForm.valid == true) {
      alert('INGRESO TODO BIEN');
    } else {

      alert('INGRESO ALGO MAL');

    }
  }
}

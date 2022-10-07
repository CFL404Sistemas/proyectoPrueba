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
      mensaje: [
        "",
        [
          Validators.required,
        ]
      ]
    });
  }
  onLogin() {

    console.log(this.loginForm);

    if (this.loginForm.valid == true) {

      /* alert(); */
      window.open('https://wa.me/' + 2213543668 + '?text=' + this.loginForm.value.mensaje + 'Este es mi Email:' + this.loginForm.value.email, '_blank');
    }

  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
this.registerForm = this.formBuilder.group({
  email: ['', [Validators.email, Validators.required]],
  password: ['', [Validators.minLength(6), Validators.required]]
});

    }

    get f() {
    return this.registerForm.controls;
    }
  // tslint:disable-next-line:typedef
    submit() {
    this.submitted = true;

    if (this.registerForm.invalid){return; }
    alert('form send');
    }

}



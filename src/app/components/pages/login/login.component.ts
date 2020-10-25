import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder, public router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]]
    });
  }

  get f(): any {
    return this.registerForm.controls;
  }

  submit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) return;

    localStorage.setItem('user', JSON.stringify({name: 'andrii', role: 'user'}));
    this.router.navigate(['']);
  }

}



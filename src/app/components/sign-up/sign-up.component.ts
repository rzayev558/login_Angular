import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginForm, RegisterRequest } from '../../shared/types';
import { Store } from '@ngrx/store';
import { register } from '../../store/actions';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  buttonDisabled = false;
  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.signInForm.invalid) {
      console.log('form is invalid');
    } else {
      const request: RegisterRequest = {
        user: this.signInForm.value as {
          username: string;
          email: string;
          password: string;
        },
      };
      console.log('request:', request);
      this.store.dispatch(register({ request }));
    }
  }
}

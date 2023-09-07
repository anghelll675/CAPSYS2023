import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseData } from '../core/models/response-data.model';
import { LoginService } from './login.service';
import { AlertsService } from '../shared/alerts/alerts.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  requestSigInForm: FormGroup;
  showPass: boolean = false;
  isApiLoading: boolean = false;
  constructor(
    // private _alert: AlertsService,
    private _HTTPMETHODS: LoginService,
    private router: Router,
    private _fb: FormBuilder) {
    this.requestSigInForm = this._fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  signIn() {
    if (this.requestSigInForm.valid) {
      this.isApiLoading = true;
      this._HTTPMETHODS.HttpPost('Login', {}, this.requestSigInForm.value).subscribe({
        next: (response: ResponseData<string>) => {
          localStorage.setItem(environment.LOCALSTORAGENAME, response.data);
          // this._alert.success('asasasas');
          this.router.navigate(['/home']);
          this.isApiLoading = false;
        },
        error: err => {
          this.isApiLoading = false;
        }
      });
    }
  }

}

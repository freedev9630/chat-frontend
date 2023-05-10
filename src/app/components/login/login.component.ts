import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, AuthService } from '@mean/services';
import { BaseComponent } from '@mean/shared';
import { UriConstants } from '@mean/utils';
import { LocalStorageConstants } from 'src/app/utils/local.storage';
type GetLogin = {};
type PostLogin = { token: string, refresh: string};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent<GetLogin, PostLogin> {
  constructor(
    protected api: ApiService<GetLogin, PostLogin>,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    super(api);
    this.formGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  handdleLogin() {
    if (this.isFormValid()) {
      const { email, password } = this.formGroup.value;
      this.createService({data: { email, password}, url: UriConstants.USER_LOGIN})
      .subscribe({
        next: (response) => {
          const { token, refresh } = response.response;
          this.authService.saveToSessionStorage(LocalStorageConstants.USER_TOKEN, token || '');
          this.authService.saveToSessionStorage(LocalStorageConstants.USER_REFRESH_TOKEN, refresh || '');
          this.router.navigate(['/admin']);
        },

        error: err => {
          this.alertConfiguration('ERROR', err);
          this.openAlert();
          this.loading = false;
        }
      });
    }

  }
}

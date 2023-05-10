import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@mean/services';
import { BaseComponent } from '@mean/shared';
import { UriConstants } from '@mean/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent {
  userImg: File | null = null;
  constructor(
    protected api: ApiService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    super(api);
    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handdleRegister() {
    if (this.isFormValid()) {
      const data: FormData = new FormData();
      const { firstName, lastName, email, password } = this.formGroup.value;
      data.append('firstName', firstName);
      data.append('lastName', lastName);
      data.append('email', email);
      data.append('active', 'true');
      data.append('roleId', '2');
      data.append('password', password);
      if (this.userImg) data.append('img', this.userImg);
      this.createService({data, url: UriConstants.USER_REGISTER})
      .subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },

        error: err => {
          this.alertConfiguration('ERROR', err);
          this.openAlert();
          this.loading = false;
        }
      });
    }
  }

  onUpload({ files }: { files: FileList}) {
    this.userImg = files[0];
  }
  getFile(evt: any) {
    this.userImg = null;
  }
}

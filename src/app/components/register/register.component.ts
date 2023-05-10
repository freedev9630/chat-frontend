import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  userImg: File | null = null;
  constructor() {}

  onUpload({ files }: { files: FileList}) {
    this.userImg = files[0];
  }

  getFile() {
    this.userImg = null;
  }

}

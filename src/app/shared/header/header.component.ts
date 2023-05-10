import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@mean/services';
import { LocalStorageConstants } from 'src/app/utils/local.storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logo = '../../../assets/logo.png';
  showMenuLogin = true;
  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {
    this.showMenuLogin = this.authService.readSessionStorage(LocalStorageConstants.USER_TOKEN).user.id === 0;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}

import { Injectable } from '@angular/core';
import { LocalStorageConstants } from '../utils/local.storage';
import { Router } from '@angular/router';
import { AuthService } from '@mean/services';

@Injectable({
  providedIn: 'root'
})
export class HomeAuthGuard {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
    ){}
  canActivate(): boolean {
    const checkSesion = this.authService.readSessionStorage(LocalStorageConstants.USER_TOKEN);
    if (checkSesion.user.id === 0) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}

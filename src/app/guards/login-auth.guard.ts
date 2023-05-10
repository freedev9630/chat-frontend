import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageConstants } from '../utils/local.storage';
import { AuthService } from '@mean/services';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
    ){}
  canActivate(): boolean {
    const checkSesion = this.authService.readSessionStorage(LocalStorageConstants.USER_TOKEN);
    if (checkSesion.user.id !== 0) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }



}

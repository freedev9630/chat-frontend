import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthModel } from '@mean/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveToSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  readSessionStorage(key: string): AuthModel.UserTokenData {
    return this.getTokenData(sessionStorage.getItem(key) || '');
  }

  private getTokenData(accesToken: string): AuthModel.UserTokenData {
    return accesToken ? jwtDecode(accesToken) : AuthModel.userTokenData;
  }
}

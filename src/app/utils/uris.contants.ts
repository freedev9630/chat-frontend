import { isDevMode } from '@angular/core';

const host = isDevMode() ? 'http://localhost:5000' : 'otherdomain.com';
const apiVersion = '/api/v1';
const basePath = host + apiVersion;
export class UriConstants {
  public static readonly HOST = host;
  public static readonly MESSAGES = basePath + '/messages';
  public static readonly USER_LOGIN = basePath + '/users/login';
  public static readonly USER_REGISTER = basePath + '/users/create';

}

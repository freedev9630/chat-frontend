import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageConstants } from '../utils/local.storage';
@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor(
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = sessionStorage.getItem(LocalStorageConstants.USER_TOKEN);
    if (token) {
      if (!req.url.toString().includes('refresh')) {
        req = req.clone({
          setHeaders: {
            Authorization: 'Bearer ' + token
          },
        });
      }
    }

    return next.handle(req);
  }
}

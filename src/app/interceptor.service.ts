import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authResponse: any = {};
    if (localStorage.getItem('connectedUser')) {
      authResponse = JSON.parse(
        localStorage.getItem('connectedUser') as string
      );
    }

    const authReq = req.clone({
      headers: new HttpHeaders({
        Authorization: 'Bearer' + authResponse.accessToken
      })
    })
    return next.handle(authReq);
  }
}

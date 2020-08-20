import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Max-Age", "8080");
    headers.append("Access-Control-Allow-Headers", "content-type");
    headers.append("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    var authRequest  =  request.clone({
      headers : headers
  });
    return next.handle(authRequest);
  }
}

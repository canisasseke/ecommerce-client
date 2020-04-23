import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from './keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class KeycloakHttpInterceptorService implements HttpInterceptor {



  constructor(private keycloakService: KeycloakService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor ' + req);
    if (!this.keycloakService.kc.authenticated) { return next.handle(req); }
    const request = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.keycloakService.kc.token
      }
    });
    return next.handle(request);
  }
}

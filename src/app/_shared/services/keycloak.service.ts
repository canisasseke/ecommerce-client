import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  public kc: KeycloakInstance;

  constructor() { }

  async init() {
    console.log('keycloack intialisazion ...');
    this.kc = new Keycloak({
      realm: 'ecommerce-realm',
      url: 'http://localhost:8080/auth',
      clientId: 'ecommerce-client'
    });

    await this.kc.init({
      // onLoad: 'login-required'
      onLoad: 'check-sso',
    });
    console.log(this.kc.token);
  }
}

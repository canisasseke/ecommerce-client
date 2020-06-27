import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
import { EnvironmentUrlService } from './environment-url.service';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  public kc: KeycloakInstance;

  constructor(private environmentUrlService: EnvironmentUrlService) { }

  async init() {
    console.log('keycloack intialisazion ...');
    this.kc = new Keycloak({
      realm: this.environmentUrlService.keycloakRealm,
      url: this.environmentUrlService.keycloakUrl,
      clientId: this.environmentUrlService.keycloakClientId
    });

    await this.kc.init({
      // onLoad: 'login-required'
      onLoad: 'check-sso'
    });
    console.log(this.kc.token);
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentUrlService {

  apiHostUrl = environment.apiHostUrl;
  keycloakRealm = environment.keycloakRealm;
  keycloakUrl = environment.keycloakUrl;
  keycloakClientId = environment.keycloakClientId;
  constructor() { }

}

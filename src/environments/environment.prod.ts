export const environment = {
  production: true,
  apiHostUrl: window['env']['apiHostUrl'] || 'default',
  keycloakRealm: window['env']['keycloakRealm'] || 'default',
  keycloakUrl: window['env']['keycloakUrl'] || 'default',
  keycloakClientId: window['env']['keycloakClientId'] || 'default',
  debug: window['env']['debug'] || false

};

(function(window) {
  window.env = window.env || {};

  // Environment variables
  window["env"]["apiHostUrl"] = "${API_HOST_URL}";
  window["env"]["keycloakRealm"] = "${KEYCLOAK_REALM}";
  window["env"]["keycloakUrl"] = "${KEYCLOAK_URL}";
  window["env"]["keycloakClientId"] = "${KEYCLOAK_CLIENT_ID}";
  window["env"]["debug"] = "${DEBUG}";
})(this);
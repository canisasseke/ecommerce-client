import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { KeycloakService } from '../_shared/services/keycloak.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  rightitems: MenuItem[];
  constructor(public keycloakService: KeycloakService) { }

  ngOnInit(): void {
      this.items = [
            {
                label: 'Standard',
                items: [{
                        label: 'Products',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'List', routerLink: ['/products/list']},
                            {label: 'create'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            }
        ];
      this.rightitems = [
              {label: 'Logout', icon: 'pi pi-power-off', command: () => {this.logout(); }},
              {label: 'Change password', icon: 'pi pi-fw pi-plus', command: () => {this.onChangePassword(); }}
              ];
    }

    logout() {
      this.keycloakService.kc.logout();
    }
    onLogin() {
      this.keycloakService.kc.login();
    }
    onChangePassword() {
      this.keycloakService.kc.accountManagement();
    }
  }


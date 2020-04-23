import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InternalErrorComponent } from './internal-error/internal-error.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ProductListComponent } from './product-list/product-list.component';
import { KeycloakService } from './_shared/services/keycloak.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { KeycloakHttpInterceptorService } from './_shared/services/keycloak-http-interceptor.service';

export function keycloakFactory(keycloakService: KeycloakService) {
  return () => keycloakService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NotFoundComponent,
    InternalErrorComponent,
    UnauthorizedComponent,
    ProductListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    MenubarModule,
    MenuModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [
    {provide: APP_INITIALIZER, deps: [KeycloakService], useFactory: keycloakFactory, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: KeycloakHttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

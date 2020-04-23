import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InternalErrorComponent } from './internal-error/internal-error.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'products/list', component: ProductListComponent}
    ]
  },
  {path: 'internal-error', component: InternalErrorComponent},
  {path: 'not-authorized', component: UnauthorizedComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

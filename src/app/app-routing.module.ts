import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => {
      console.log('Module present', m);
      return m.CartModule;
    }).catch((error) => {
      console.log('error');
      return Promise<null>;
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './MyComponents/email/email.component';
import { HomeComponent } from './MyComponents/home/home.component';

const routes: Routes = [
  {
    path: "sendmail", component:EmailComponent,
    pathMatch: "full",
  },
  {
    path:'',
    component: HomeComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

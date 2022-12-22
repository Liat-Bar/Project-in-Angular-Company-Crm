import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
{path:"", pathMatch:"full", redirectTo:"login"},
{path:"login", component: LoginComponent},
{path:"register", component: RegisterComponent},
{path:"home", component: HomeComponent, canActivate:[AuthGuard]},
{path:"customers", component:HomeComponent,},
{path:"employees", component:ShowEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
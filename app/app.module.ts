import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterCustomerPipe } from './pipes/filter-customer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    ShowCustomersComponent,
    ViewCustomerComponent,
    ShowEmployeesComponent,
    NavigationComponent,
    FilterPipe,
    FilterCustomerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

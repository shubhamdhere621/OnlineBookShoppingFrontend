import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';
import { SignupComponent } from './signup/signup.component';
<<<<<<< HEAD
import { ServicesComponent } from './services/services.component';

=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> c0dd98cd4db1c7b7a6720c904c65ca2dd728f75a
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,
    HomeComponent,
    SignupComponent,
    ServicesComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

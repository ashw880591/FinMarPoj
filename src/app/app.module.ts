import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//toaster..
//import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { route } from './route.config';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //toater import
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

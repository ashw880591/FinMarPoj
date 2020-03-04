import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//toaster..
//import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { OurProjectComponent } from './our-project/our-project.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './our-project/gallery/gallery.component';
import { ResidentialsComponent } from './what-we-do/residentials/residentials.component';
import { HospitalityComponent } from './what-we-do/hospitality/hospitality.component';
import { IndustrialComponent } from './what-we-do/industrial/industrial.component';
import { EducationComponent } from './what-we-do/education/education.component';
import { FooterComponent } from './footer/footer.component';
import { OurprojectnameComponent } from './ourprojectname/ourprojectname.component';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NriSectionComponent } from './nri-section/nri-section.component';
import { InvesterSectionComponent } from './invester-section/invester-section.component';
import { route } from './route.config';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoWeAreComponent,
    WhatWeDoComponent,
    OurProjectComponent,
    CareerComponent,
    ContactUsComponent,
    GalleryComponent,
    ResidentialsComponent,
    HospitalityComponent,
    IndustrialComponent,
    EducationComponent,
    FooterComponent,
    OurprojectnameComponent,
    NavbarComponent,
    NriSectionComponent,
    InvesterSectionComponent
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

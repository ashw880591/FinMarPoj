import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Home',loadChildren:'./home/home.module#HomeModule' },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'WhoWeAre', loadChildren:'./who-we-are/who-we-are.module#WhoWeAreModule' },
  { path: 'WhatWeDo', loadChildren:'./what-we-do/what-we-do.module#WhatWeDoModule' },
  { path: 'Residentials', loadChildren:'./what-we-do/residentials/residentials.module#ResidentialsModule' },
  { path: 'Hospitality', loadChildren:'./what-we-do/hospitality/hospitality.module#HospitalityModule' },
  { path: 'Industrial', loadChildren:'./what-we-do/industrial/industrial.module#IndustrialModule'},
  { path: 'Education',  loadChildren:'./what-we-do/education/education.module#EducationModule'},
  { path: 'OurProject', loadChildren:'./our-project/our-project-module#OurProjectModule' },
  { path: 'Gallery', loadChildren:'./our-project/gallery/gallery.module#GalleryModule' },
  { path: 'Career', loadChildren:'./career/career.module#CareerModule' },
  { path: 'ContactUs', loadChildren:'./contact-us/contact-us.module#ContactUsModule' },
  { path: 'NriSection', loadChildren:'./nri-section/nri-section.module#NriSectionModule' },
  { path: 'InvesrerSection', loadChildren:'./invester-section/invester-section.module#InvesterSectionModule' },
  { path: 'OurProjectName', loadChildren:'./ourprojectname/ourprojectname.module#OurProjectNameModule' },
  // {
  //   path: "Admin",
  //   loadChildren: './Admin/MainSlider/Admin.module#AdminModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

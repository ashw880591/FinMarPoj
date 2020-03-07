import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-and-contact',
  templateUrl: './location-and-contact.component.html',
  styleUrls: ['./location-and-contact.component.css']
})
export class LocationAndContactComponent implements OnInit {

  constructor(private route:Router) { }

  GoToGalleryPage(){
    this.route.navigate(['/gallery'])
  }
  GoBackToLoactionPage(){
    this.route.navigate(['/architects'])
  }
  ngOnInit() {
  }

}

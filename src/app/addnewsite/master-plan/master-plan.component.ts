import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-plan',
  templateUrl: './master-plan.component.html',
  styleUrls: ['./master-plan.component.css']
})
export class MasterPlanComponent implements OnInit {

  constructor(private route:Router) { }

  GoToFloorPlanPage(){
    this.route.navigate(['/floorplan'])
  }
  GoBackToGalleryPage(){
    this.route.navigate(['/gallery'])
  }
  ngOnInit() {
  }

}

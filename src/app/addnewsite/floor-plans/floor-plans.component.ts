import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floor-plans',
  templateUrl: './floor-plans.component.html',
  styleUrls: ['./floor-plans.component.css']
})
export class FloorPlansComponent implements OnInit {

  constructor(private route:Router) { }
GoToSpecificaytionPage(){
  this.route.navigate(['/specification'])
}
GoBackToMasterPlanPage(){
  this.route.navigate(['/masterplan'])
}
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.css']
})
export class SpecificationsComponent implements OnInit {

  constructor(private route:Router) { }
GoToBroucherPage(){
  this.route.navigate(['/broucher'])
}
GoBackToFloorPlanPage(){
  this.route.navigate(['/floorplan'])
}
  ngOnInit() {
  }

}

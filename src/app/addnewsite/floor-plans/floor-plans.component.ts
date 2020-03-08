import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FloorPlanService } from './floor-plan.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-floor-plans',
  templateUrl: './floor-plans.component.html',
  styleUrls: ['./floor-plans.component.css'],
  providers:[FloorPlanService]
})
export class FloorPlansComponent implements OnInit {
  ProjectFloorPlan: FormGroup

  constructor(private route:Router,private floorplanservice:FloorPlanService) { 

    this.ProjectFloorPlan = new FormGroup({
      architecture_name: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }


  sersignup: any;
  temp:string




GoToSpecificaytionPage(){
  this.route.navigate(['/specification'])
}
GoBackToMasterPlanPage(){
  this.route.navigate(['/masterplan'])
}
  ngOnInit() {
  }




  public saveAction(data: any) {



    localStorage.setItem('key', data.mobileno);
    console.log(JSON.stringify(data));

    this.floorplanservice.saveAllFloorPlan(data).subscribe

      (
        res => {
        this.sersignup = res;

        },

        err => { this.sersignup = err }

      );


  }
}

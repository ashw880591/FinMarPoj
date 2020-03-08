import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BroucherService } from './broucher.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-broucher',
  templateUrl: './broucher.component.html',
  styleUrls: ['./broucher.component.css'],
  providers:[BroucherService]
})
export class BroucherComponent implements OnInit {
  ProjectBroucher: FormGroup

  constructor(private route:Router,private broucher:BroucherService) { 
    this.ProjectBroucher = new FormGroup({
      broucher_image: new FormControl('', Validators.required),
      unable_desclaimer: new FormControl('', Validators.required),
    })

  }



  sersignup: any;
   temp:string



GoBackToSpecificationPage(){
  this.route.navigate(['/specification'])
}
  ngOnInit() {
  }

public saveAction(data: any) {



    localStorage.setItem('key', data.mobileno);
    console.log(JSON.stringify(data));

    this.broucher.saveAllBroucher(data).subscribe

      (
        res => {
        this.sersignup = res;

        },

        err => { this.sersignup = err }

      );


  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-broucher',
  templateUrl: './broucher.component.html',
  styleUrls: ['./broucher.component.css']
})
export class BroucherComponent implements OnInit {

  constructor(private route:Router) { }
GoBackToSpecificationPage(){
  this.route.navigate(['/specification'])
}
  ngOnInit() {
  }

}

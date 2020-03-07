import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private router:Router) { }

  GoBackToTitlePage(){
    this.router.navigate(['/title'])
  }

  GoToArchitectsNotePage(){
    this.router.navigate(['/architects'])
  }
  ngOnInit() {
  }

}

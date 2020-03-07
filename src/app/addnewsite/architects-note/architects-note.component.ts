import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-architects-note',
  templateUrl: './architects-note.component.html',
  styleUrls: ['./architects-note.component.css']
})
export class ArchitectsNoteComponent implements OnInit {

  constructor(private titlerouter:Router) { }

  GoBackToOverviewPage(){
    this.titlerouter.navigate(['/overview'])
  }

  GoToLocationPage(){
    this.titlerouter.navigate(['/location'])
  }
  ngOnInit() {
  }

}

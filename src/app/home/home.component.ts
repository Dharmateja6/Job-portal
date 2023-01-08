import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobListService } from '../job-list.service';
import { VerifyService } from '../verify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  list=['Software trainee','Senior Manager','Data Engineer']
  locations=['Bangalore','Hyderabad','Chennai']
  selectedrole:any = '';
  selectedLocation:any='';
  constructor(private _jobservice:JobListService) {
  }

  ngOnInit(): void {
  }
  selectRole(event: any) {
    this.selectedrole = event.target.value;
}  
  roleSe(){
    this._jobservice.myMethod(this.selectedrole);
    this._jobservice.myLoc(this.selectedLocation);
  }
  selectLocation(event:any){
    this.selectedLocation =event.target.value;
  }
}







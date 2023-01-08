import { Component, Input, OnInit } from '@angular/core';
import { JobListService } from 'src/app/job-list.service';
import { IgxFilterOptions } from 'igniteui-angular';
import { VerifyService } from '../../verify.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  @Input() public ParentData: any;
  public joblists :any=[]
  public searchRole:any;
  public message:any;
  public selecttrole:any;
  public locationss:any;
  constructor(private _jobservice:JobListService) {
   }
  ngOnInit(): void {
    this._jobservice.myLocation$.subscribe((selectedLocation) =>{this.locationss=selectedLocation});
    this._jobservice.myRole$.subscribe((selectedrole) =>{this.message=selectedrole});
    if(this.locationss=="" && this.message==""){
      this.joblists =this._jobservice.getjobList();
    }
    else if(this.locationss!="" && this.message==""){
      this.joblists=this._jobservice.getjobList().
      filter(joblis => joblis.Location === this.locationss);
    }
    else if(this.locationss=="" && this.message!=""){
      this.joblists=this._jobservice.getjobList().
      filter(joblis => joblis.Role === this.message);
    }
    else{
      this.joblists=this._jobservice.getjobList().
      filter(joblis => joblis.Role === this.message && joblis.Location===this.locationss);
    }
  }
get filterContacts() {
  const fo = new IgxFilterOptions();
  fo.key = 'Role';
  fo.inputValue = this.searchRole;
  return fo;
  }
highLightRole(joblis: { ID: any; }){
  this.selecttrole=joblis.ID
}



} 



  





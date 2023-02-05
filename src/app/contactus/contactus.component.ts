import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public name:any;
  public mail:any;
  public sendbtn:boolean=true;

  constructor() { }

  ngOnInit(): void {
    if(this.name!=null&&this.mail!=null){
      this.sendbtn=false;
    }

    
  }
myFunction(){
  alert('Successfully Submitted')
  
}

}

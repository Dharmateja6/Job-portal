import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobListService {
  myRole$:Observable<any>;
  private _mySelectedRole= new BehaviorSubject<any>("");
  myLocation$:Observable<any>;
  private _mySelectedLoaction= new BehaviorSubject<any>("");
 

  constructor() {
    this.myRole$=this._mySelectedRole.asObservable();
    this.myLocation$=this._mySelectedLoaction.asObservable();

   }
  myMethod(selectedrole:any){
    this._mySelectedRole.next(selectedrole);
  }
  myLoc(selectedLoaction:any){
    this._mySelectedLoaction.next(selectedLoaction);
  }
  getjobList(){    
    return[  
      {"ID":20365,"Role":"Software trainee","Location":"Bangalore"},
      {"ID":20366,"Role":"Software trainee","Location":"Hyderabad"},
      {"ID":20367,"Role":"Software trainee","Location":"Chennai"},
      {"ID":20375,"Role":"Data Engineer","Location":"Bangalore"},
      {"ID":20376,"Role":"Data Engineer","Location":"Hyderabad"},
      {"ID":20378,"Role":"Data Engineer","Location":"Chennai"},
      {"ID":20395,"Role":"Senior Manager","Location":"Bangalore"},
      {"ID":20396,"Role":"Senior Manager","Location":"Hyderabad"},
      {"ID":20397,"Role":"Senior Manager","Location":"Chennai"},
      {"ID":20398,"Role":"Senior Manager","Location":"Chennai"},

    ]
  }  
}
  



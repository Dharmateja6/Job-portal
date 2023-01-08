import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  myRole$:Observable<any>;
  private _mySelectedRole= new BehaviorSubject<any>('');


  constructor() {
    this.myRole$=this._mySelectedRole.asObservable();
   }
  myMethod(selectedrole:any){

    console.log(selectedrole)
    
    this._mySelectedRole.next(selectedrole);
  }
}

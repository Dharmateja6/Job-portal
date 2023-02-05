import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  // myRole$:Observable<any>;
  // private _mySelectedRole= new BehaviorSubject<any>('');


  // constructor() {
  //   this.myRole$=this._mySelectedRole.asObservable();
  //  }
  // myMethod(selectedrole:any){

  //   console.log(selectedrole)
    
  //   this._mySelectedRole.next(selectedrole);
  // }
  private baseUrl:string="https://localhost:44389/api/User/"
  constructor(private http:HttpClient) { }
  signup(userobj:any){
     return this.http.post<any>(`${this.baseUrl}register`,userobj)
    }
  login(loginobj:any){
      return this.http.post<any>(`${this.baseUrl}authenticate`,loginobj)
    }
}

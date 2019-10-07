import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userInfo= new BehaviorSubject<UserModel>(new UserModel());


  constructor() { }

  getUserInfo(){
    return this.userInfo.asObservable();
  }

  loginUser(username: String, pass:String){
    let user = null;
    if(username =="jose@gmail.com" && pass =="1234567890"){
      user= new UserModel();
      user.firstName= 'Jose';
      user.secondName= 'of';
      user.firstLastName= 'Manuel';
      user.email= 'jose@gmail.com';
      user.isLogged= 'true';
      this.userInfo.next(user);
    }
    return user; 
  }


}

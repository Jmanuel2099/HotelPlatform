import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/Services/security.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


userInfo: UserModel;
userLogged: boolean= false;
userName: String;

  subscription: Subscription;
  
  constructor(private secService:SecurityService) { }

  ngOnInit() {
    this.verifyUserSesion();
  }

  verifyUserSesion(){
    this.subscription = this.secService.getUserInfo().subscribe(user=>{this.userInfo = user; this.updateInfo();});
  }

  updateInfo(){
    this.userLogged = this.userInfo.isLogged;


  }

}
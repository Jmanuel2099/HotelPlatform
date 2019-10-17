import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/Services/security.service';
import { Router } from '@angular/router';

declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

fgValidation: FormGroup;
  
  constructor(private fb: FormBuilder, private secService: SecurityService, private router: Router) { 

  }

fgValidationBuilder(){
  this.fgValidation= this.fb.group({
    username:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.email]],
    password:['',[Validators.required, Validators.minLength(8),Validators.maxLength(15)]]
  });
}

loginEvent(){
  if(this.fgValidation.invalid){
    alert("Error data")
  }else{
    let u= this.fg.username.value;
    let p= this.fg.password.value;
    let user = this.secService.loginUser(u,p);
    if(user != null){
      console.log(user);
      this.router.navigate(['/home']);
    }else{
      openPlatformModalMessage('The data is not valid !');
    }
  }
}

get fg(){
  return this.fgValidation.controls;
}

  ngOnInit() {
    this.fgValidationBuilder()
  }

}

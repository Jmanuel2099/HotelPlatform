import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/Services/country.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryModel } from 'src/app/models/country.model';

declare var openPlatformModalMessage: any;

@Component({
  selector: 'app-country-editor',
  templateUrl: './country-editor.component.html',
  styleUrls: ['./country-editor.component.css']
})
export class CountryEditorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private route: ActivatedRoute,
    private countryService: CountryService,
    private fb: FormBuilder,
    private router: Router) {
   }

  ngOnInit() {
    this.formGenerator();
    this.getCountryInfo();
  }

  getCountryInfo(){
    let code = this.route.snapshot.paramMap.get("id");
    //this.code = this.route.snapshot.params["id"];
    if( code != null && code != undefined){
      let country = this.countryService.searchCountry(code);
      if(country != undefined && country!= null){
        this.fv.code.setValue(country.code)
        this.fv.name.setValue(country.name)
      }else{
        openPlatformModalMessage(`The country with code ${code} does not exists!`);
        this.router.navigate(['country/List'])
      }
    }else{
      openPlatformModalMessage("the URL is invalid");
    }
    
    
  }


  get fv(){
    return this.frmValidator.controls;
  }

  formGenerator(){
    this.frmValidator= this.fb.group({
      code:['',[Validators.required]],
      name:['',[Validators.required, Validators.minLength(4)]]
    })
  }

  saveCountry(){
    if (this.frmValidator.invalid){
        openPlatformModalMessage("The form is invalid!") 
    }else{
      let c: CountryModel= {
        code: this.fv.code.value,
        name: this.fv.name.value
      }
      let saved= this.countryService.updateCountry(c);
      if(saved == 1){
        openPlatformModalMessage("Data stored successfully. ") 
        this.router.navigate(['country/List'])
      }else{
        if(saved == 2){
          openPlatformModalMessage("The country with this code does not exist")
        }else{
        openPlatformModalMessage("Error storing data") 
      }
    }
    }
  }

}

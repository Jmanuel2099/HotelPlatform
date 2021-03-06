import { Component, OnInit } from '@angular/core';
import { CountryModel } from 'src/app/models/country.model';
import { CountryService } from 'src/app/Services/country.service';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  p: number = 1;
  countryList : CountryModel[] = [];
  codeToRemove: String

  constructor( private countryService: CountryService) { }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries= () => {
    this.countryList = this.countryService.loadAllCountries()
  }

  openConfirmation(code){
    //console.log(code)
    this.codeToRemove= code;
    openConfirmationModal()
  }

  removeElemnt(){
    //console.log("Removing")
    this.countryService.deleteCountry(this.codeToRemove)
    this.loadCountries();
  }

}

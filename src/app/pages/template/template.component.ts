import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryServiceService } from 'src/app/services/country-service.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user: any = { // por si quiero setear valores por defecto a los campos del formulario
    name: 'fran',
    surename: '',
    email: '', 
    country: '',
    genre: ''
  }

  countries: Array<Country> = [];

  constructor(private _countriesService: CountryServiceService) { }

  ngOnInit(): void {
    this._countriesService.getCountries()
      .subscribe(res => {
        this.countries = res;
        this.countries.unshift(
          {
            name: 'Select your country',
            alpha3Code: ''
          }
        )
    })
  }


  save(form: NgForm) {
    let array = ['name','surename','email'];
    
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
    } else {
      form.reset({
        country: ''
      })
    }
  }
}

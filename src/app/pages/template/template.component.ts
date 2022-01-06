import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryServiceService } from 'src/app/services/country-service.service';
import { map } from 'rxjs/operators';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user: any = {
    name: 'fran',
    surename: '',
    email: '', 
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
    if (form.invalid) Object.values(form.controls).forEach(control => control.markAsTouched());

    console.log(form.value);
    console.log(form.status);
    console.log(form.controls);

    form.reset();
  }
}

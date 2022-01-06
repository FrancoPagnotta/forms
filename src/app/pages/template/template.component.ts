import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryServiceService } from 'src/app/services/country-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user: Object = {
    name: 'fran',
    surename: '',
    email: ''
  }

  countries: Array<any> = [];

  constructor(private _countriesService: CountryServiceService) { }

  ngOnInit(): void {
    this._countriesService.getCountries()
      .subscribe(res => {
        // this.countries = res;
        console.log(this.countries);
        console.log(res);
    })

  }

  save(form: NgForm) {
    if (form.invalid) Object.values(form.controls).forEach(control => control.markAsTouched());
    else {
      console.log(form);
      form.reset();
    }
  }
}

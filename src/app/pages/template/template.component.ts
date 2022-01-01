import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user = {
    name:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    console.log('submit disparado!', form);
    console.log('value del formulario!', form.value);
  }

}

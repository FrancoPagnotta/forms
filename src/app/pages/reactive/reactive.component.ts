import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      surename: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required]]
    });
  }

  save(): void {
    console.log(this.form);
  }

}

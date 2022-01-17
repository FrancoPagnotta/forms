import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  invalidFormControl(control: string): boolean { 
    return this.form.controls[control].invalid && this.form.controls[control].touched
  }

  createForm() {
    this.form = this.formBuilder.group({ // Nuestro primer formGroup
      name: ['',[Validators.required, Validators.minLength(3)]], // Esto son validadores SINCRONOS
      surename: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      adress: this.formBuilder.group({ // Nuestro segundo formGroup anidado 
        city: ['',Validators.required],
        street: ['',Validators.required]
      })
    });
  }

  save() {
    Object.values(this.form.controls).forEach(control => control.markAsTouched());
  }

}

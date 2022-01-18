import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
    this.loadDataToForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.form = this.formBuilder.group({ // Nuestro primer formGroup
      name: ['',[Validators.required, Validators.minLength(3)]], // Esto son validadores SINCRONOS
      surename: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      adress: this.formBuilder.group({ // Nuestro segundo formGroup anidado 
        city: ['',Validators.required],
        street: ['',Validators.required]
      }),
      notes: this.formBuilder.array([])
    });
  }

  invalidFormControl(control: string): boolean { 
    return this.form.controls[control].invalid && this.form.controls[control].touched
  }

  invalidFormGroupControls(control: string): boolean { 
    return (this.form.controls['adress'] as FormGroup).controls[control].invalid && (this.form.controls['adress'] as FormGroup).controls[control].touched
  }
  
  save() {
    if(this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        control.markAllAsTouched()
      });
    }
    this.form.reset();
  }

  loadDataToForm() {
    this.form.setValue({
      name: 'Franco',
      surename: 'Franco',
      email:'mail@gmail.com',
      adress: {
        city: 'Buenos Aires',
        street: 'libertador'
      },
      notes:[]
    });
  }

  // Getter
  get notes() {
    return this.form.get('notes') as FormArray;
  }

  // Hobbies
  addHobbie() {
    this.notes.push(this.formBuilder.control(''));
  }

  deleteHobbie(i:number) {
    this.notes.removeAt(i);
  }

}

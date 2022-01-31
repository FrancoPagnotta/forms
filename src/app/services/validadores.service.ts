import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control: FormControl): {[s:string]: boolean} | null {
    if (control.value.toLowerCase() === 'herrera') {
      return {
        noHerrera: true
      }
    }
    return null
  }

  equalPasswords(password: string, repeatPassword: string) {
    return (formGroup: FormGroup)=> {
      const passwordControl = formGroup.controls[password];
      const repeatPasswordControl = formGroup.controls[repeatPassword];
      return passwordControl.value === repeatPasswordControl.value ? repeatPasswordControl.setErrors(null) : repeatPasswordControl.setErrors({ diferentPasswords: true })
    }
  } 

}
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control: FormControl): ErrorValidate | null {
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

  userExist(user: FormControl): Promise<ErrorValidate | null> | Observable<ErrorValidate | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.value === 'strider') {
          resolve({exist: true})
        } else {
          resolve(null)
        }
      },2500)
    })
  }

}
import { AbstractControl } from '@angular/forms';

// Validador customizado para comparar dois campos
export class EqualsTo {

   static checkEmails(control: AbstractControl) {
    if (control.get('email')?.value === control.get('emailConfirmation')?.value) {
      return null;
    } else {
      control.get('emailConfirmation')?.setErrors({ equalsTo: true });
      
    }
  }
  
  
}

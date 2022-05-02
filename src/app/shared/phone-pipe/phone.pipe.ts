import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(tel) {
    if (tel) {
      const value = tel.toString().replace(/\D/g, '');

      let formatedFone = '';

      if (value.length > 12) {
        formatedFone = value.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 11) {
        formatedFone = value.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 10) {
        formatedFone = value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 9) {
        formatedFone = value.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 5) {
        formatedFone = value.replace(/^(\d{2})?(\d{4})?(\d{0,4})/, '($1) $2-$3');

      } else if (value.length > 1) {
        formatedFone = value.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
      } else {
        if (tel !== '') { formatedFone = value.replace(/^(\d*)/, '($1'); }
      }
      return formatedFone;
    }0
    return null;
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlErrorService {

  public getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config: any = {
      required: `${fieldName} é obrigatório.`,
      minlength: `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      maxlength: `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      custom: `Informe um ${fieldName} válido.`,
      equalsTo: `${fieldName} não são iguais.`,
      pattern: `${fieldName} está inválido.`,
      invalidCep: `${fieldName} está inválido.`,
    };

    return config[validatorName];
  }
}

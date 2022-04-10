import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

// Validador customizado para comparar dois campos
export const equalsTo = (
  controlName: string,
  equalsToName: string
) => {
  const valid = (formGroup: FormGroup): any=> {
    // Pega os campos conforme os nomes que foram passados
    const control = formGroup.controls[controlName]
    const equals = formGroup.controls[equalsToName]

    // Verifica se o primeiro campo atende todas as validações
    if (control.errors) {
      return null;
    }

    // Verifica se o campos são iguais
    if (control.value !== equals.value) {
      // Se não for, cria o erro "comparacao"
      control.setErrors({ comparation: true });
    } else {
      // Caso contrário zera os erros.
      equals.setErrors(null);
    }
  };
  return valid;
};
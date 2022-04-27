import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { EmployeesFormComponent } from "../employees/employees-form/employees-form.component";



@Injectable()

export class UserDeactivateGuard implements CanDeactivate<EmployeesFormComponent>{


    canDeactivate(component: EmployeesFormComponent,
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (component.registerForm.valid && component.registerForm.dirty) {

            if (component.send === true) {
                return true;
            }
            return confirm('Tem certeza que deseja sair do formulário?');
        }

        return true;
    }
}
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { EmployeesCreateComponent } from "../employees/employees-create/employees-create.component";


@Injectable()

export class UserDeactivateGuard implements CanDeactivate<EmployeesCreateComponent>{


    canDeactivate(component: EmployeesCreateComponent,
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (component.registerForm.dirty) {
            return confirm('Tem certeza que deseja sair do formulário?')
        }
        return true;
    }
}
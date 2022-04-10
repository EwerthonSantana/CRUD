import { EmployeesModel } from './../employees/employees-create/employees.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }


postEmployees(req: EmployeesModel): Observable<EmployeesModel> {
  return this.http.post<EmployeesModel>(`${API}/employees`, req)
}

getEmployees(): Observable<EmployeesModel>{
  return this.http.get<EmployeesModel>(`${API}/employees`)
}

getEmployeesById(id: any){
  return this.http.get(`${API}/employees/${id}`).pipe(take(1))
}

putEmployees(req: any){
  return this.http.put(`${API}/employees/${req.id}`, req)
}

deleteEmployees(id: any) {
  return this.http.delete(`${API}/employees/${id}`)
}






}

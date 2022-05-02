import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class DatasService {

    constructor(private http: HttpClient) {

    }

    getOffices() {
        return this.http.get('assets/datas/offices.json').pipe(take(1));
    }

    getStatesBr() {
        return this.http.get('assets/datas/statesBR.json').pipe(take(1));
    }

    getTechnologies() {
        return this.http.get('assets/datas/technologies.json').pipe(take(1));
    }

    getCep(cep: any): Observable<any> {
        return this.http.get(`//viacep.com.br/ws/${cep}/json/`).pipe(take(1));
    }

    getNewsLetter() {
        return [
            { value: 'sim', description: 'sim' },
            { value: 'não', description: 'não' }
        ]
    }

}


import { Professor } from '../model/Professor';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class ProfessorService {

    baseUrl = 'localhost:4200';
    professorUrl = '/professor';

    constructor(private http: Http,
        private apiService: ApiService) {
        }

    cadastrarProfessor(professor: Professor) {
        // tslint:disable-next-line:max-line-length
        return this.http.post( this.baseUrl + this.professorUrl, JSON.stringify(professor), this.apiService.getRequestOptions()).map(res => res.json());
    }

    carregarProfessor() {
      return this.http.get( this.baseUrl + this.professorUrl, this.apiService.getRequestOptions()).map(res => res.json());
  }
}

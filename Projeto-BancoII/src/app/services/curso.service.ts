import { Curso } from '../model/Curso';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class CursoService {

    baseUrl = 'localhost:4200';
    cursoUrl = '/curso';

    constructor(private http: Http,
        private apiService: ApiService) {
        }

    cadastrarCurso(curso: Curso) {
        // tslint:disable-next-line:max-line-length
        return this.http.post( this.baseUrl + this.cursoUrl, JSON.stringify(curso), this.apiService.getRequestOptions()).map(res => res.json());
    }

    carregarCurso() {
      return this.http.get( this.baseUrl + this.cursoUrl, this.apiService.getRequestOptions()).map(res => res.json());
  }
}

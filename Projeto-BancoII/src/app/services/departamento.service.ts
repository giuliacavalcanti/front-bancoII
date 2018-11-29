import { Departamento } from '../model/Departamento';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class DepartamentoService {

    baseUrl = 'localhost:4200';
    departamentoUrl = '/departamento';

    constructor(private http: Http,
        private apiService: ApiService) {
        }

    cadastrarDepartamento(departamento: Departamento) {
        // tslint:disable-next-line:max-line-length
        return this.http.post( this.baseUrl + this.departamentoUrl, JSON.stringify(departamento), this.apiService.getRequestOptions()).map(res => res.json());
    }

    carregarDepartamento() {
      return this.http.get( this.baseUrl + this.departamentoUrl, this.apiService.getRequestOptions()).map(res => res.json());
  }
}

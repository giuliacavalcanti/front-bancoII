import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/Curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [CursoService]
})
export class CursoComponent { /*implements OnInit */
  id: number;
  codigo: string;
  nome: string;
  horasObrigatorias: string;
  cargaHoraria: number;
  creditos: number;
  departamento: string;

  curso: Curso[];

  constructor(private cursoService: CursoService) { }

 /* ngOnInit() {
  }*/

  cadastroCurso() {
    console.log(this.nome);
    console.log(this.codigo);
    console.log(this.horasObrigatorias);
    console.log(this.cargaHoraria);
    console.log(this.creditos);
    console.log(this.departamento);

    const curso = new Curso;
    curso.nome = this.nome;
    curso.codigo = this.codigo;
    curso.horasObrigatorias = this.horasObrigatorias;
    curso.cargaHoraria = this.cargaHoraria;
    curso.creditos = this.creditos;
    curso.departamento = this.departamento;

      this.cursoService.cadastrarCurso(curso).subscribe(data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }

  carregarCurso() {
    this.cursoService.carregarCurso().subscribe(data => {
      console.log(data);
      this.curso = data;
    },
    error => {
      console.log(error);
    }
  );
  }

}


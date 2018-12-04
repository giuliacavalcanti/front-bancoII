import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/Aluno';
import { Matricula } from 'src/app/model/Matricula';
import { Curso } from 'src/app/model/Curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  providers: [AlunoService]
})
export class AlunoComponent implements OnInit {/*/implements OnInit*/

  nome: string;
  matricula: Matricula;
  mat: string;

  alunos: Aluno[];
  cursos: Curso[];
  cursoSelected;


  constructor(private alunoService: AlunoService, private cursoService: CursoService) { }

  ngOnInit() {
    this.carregarCursos();

  }

  cadastroAluno() {
    console.log(this.nome);
    console.log(this.matricula);
    const matricula1 = new Matricula();
    matricula1.matricula = this.mat;

    const aluno = new Aluno;
    aluno.nome = this.nome;
    aluno.matricula = matricula1;
    const curso = new Curso();
    curso.id = this.cursoSelected;
    aluno.matricula.curso = curso;

    this.alunoService.cadastrarAluno(aluno).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
      }
    );

  }

  carregarAlunos() {
    this.alunoService.carregarAlunos().subscribe(data => {
      console.log(data);
      this.alunos = data;
    },
      error => {
        console.log(error);
      }
    );
  }
  carregarCursos() {
    this.cursoService.carregarCurso().subscribe(data => {
      this.cursos = data;
    });
  }

}

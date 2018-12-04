import { Component, OnInit, OnChanges } from '@angular/core';
import { Curso } from 'src/app/model/Curso';
import { CursoService } from '../../services/curso.service';
import { Departamento } from 'src/app/model/Departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [CursoService]
})
export class CursoComponent implements OnInit {
  
  id: number;
  codigo: string;
  nome: string;
  horasObrigatorias: string;
  cargaHoraria: number;
  creditos: number;
  departamento: Departamento;
  deptId;
  departamentos: Departamento[];
  cursos;
  constructor(private cursoService: CursoService, private departamentoService: DepartamentoService) { }

  
  ngOnInit(): void {
    this.carregarDepartamentos();
  }
  cadastroCurso() {
    const curso = new Curso;
    curso.nome = this.nome;
    curso.codigo = this.codigo;
    curso.horasObrigatorias = this.horasObrigatorias;
    curso.cargaHoraria = this.cargaHoraria;
    curso.creditos = this.creditos;
    const depart = new Departamento();
    depart.id = this.deptId;
    curso.departamento = depart;

    this.cursoService.cadastrarCurso(curso).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
      }
    );
    alert("Curso cadastrado!");
    this.nome = '';
    this.codigo = '';
    this.horasObrigatorias = '';
    this.cargaHoraria = 0;
    this.creditos = 0;
    this.departamento = null;


  }

  carregarCurso() {
    this.cursoService.carregarCurso().subscribe(data => {
      console.log(data);

    },
      error => {
        console.log(error);
      }
    );
  }

  carregarDepartamentos() {
    this.departamentoService.carregarDepartamento().subscribe(a => {
      console.log(a);
      this.departamentos = a;
    });
  }

 
}


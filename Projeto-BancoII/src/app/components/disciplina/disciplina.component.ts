import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../services/disciplina.service';
import { Disciplina } from '../../model/Disciplina';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css'],
  providers: [DisciplinaService]
})
export class DisciplinaComponent { /*implements OnInit */

  nome: string;
  codigo: string;

  disciplinas: Disciplina[];

  constructor(private disciplinaService: DisciplinaService) { }


  cadastroDisciplina() {
    console.log(this.nome);
    console.log(this.codigo);

    const disciplina = new Disciplina;
    disciplina.nome = this.nome;
    disciplina.codigo = this.codigo;

      this.disciplinaService.cadastrarDisciplina(disciplina).subscribe(data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }

  carregarDisciplinas() {
    this.disciplinaService.carregarDisciplina().subscribe(data => {
      console.log(data);
      this.disciplinas = data;
    },
    error => {
      console.log(error);
    }
  );
  }

}

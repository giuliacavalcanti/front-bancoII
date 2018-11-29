import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { Professor } from '../../model/Professor';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css'],
  providers: [ProfessorService]
})
export class ProfessorComponent { /*implements OnInit*/
  nome: string;
  matricula: string;

  professors: Professor[];

  constructor(private professorService: ProfessorService) { }

  /*ngOnInit() {

    this.professors = [
      {'nome': 'braulinho', 'matricula': '29101290'},
      {'nome': 'juribeca', 'matricula': '912401290'},
      {'nome': 'xuluminhu', 'matricula': '10129012'},
    ];

  }*/

  cadastroProfessor() {
    console.log(this.nome);
    console.log(this.matricula);

    const professor = new Professor;
    professor.nome = this.nome;
    professor.matricula = this.matricula;

      this.professorService.cadastrarProfessor(professor).subscribe(data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }

  carregarProfessores() {
    this.professorService.carregarProfessor().subscribe(data => {
      console.log(data);
      this.professors = data;
    },
    error => {
      console.log(error);
    }
  );
  }

}

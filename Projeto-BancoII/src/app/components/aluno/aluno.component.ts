import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/Aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  providers: [AlunoService]
})
export class AlunoComponent {/*/implements OnInit*/

  nome: string;
  matricula: string;

  alunos: Aluno[];

  constructor(private alunoService: AlunoService) { }

  /*ngOnInit() {

    this.alunos = [
      {'nome': 'braulinho', 'matricula': '29101290'},
      {'nome': 'juribeca', 'matricula': '912401290'},
      {'nome': 'xuluminhu', 'matricula': '10129012'},
    ];

  }*/

  cadastroAluno() {
    console.log(this.nome);
    console.log(this.matricula);

    const aluno = new Aluno;
    aluno.nome = this.nome;
    aluno.matricula = this.matricula;

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

}

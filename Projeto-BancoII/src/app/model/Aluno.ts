import { Matricula } from "./Matricula";

export class Aluno {
    id: number;
    nome: string;
    matricula: Matricula;
    turmas: Array<Object>;
}

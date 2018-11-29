export class Curso {
   id: number;
   codigo: string;
   nome: string;
   horasObrigatorias: string;
   cargaHoraria: number;
    creditos: number;
    departamento: string;
    optativas: Array<Object>;
    obrigatorias: Array<Object>;
}

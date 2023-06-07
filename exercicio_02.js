class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos(){
    try {
      return this.atributos();  
    } catch (error) {
      console.log(error) 
    }
  }

  atributos() {
    if (this.nome != ""){
      return {
        nome: this.nome,
        idade: this.idade,
        turma: this.turma
      };
    } else {
      throw new MeuErro("Há campos que não foram informados")
    }
  }
}

const estudante = new Estudante("", 16, " 3a");
console.log(estudante.mostrarAtributos());
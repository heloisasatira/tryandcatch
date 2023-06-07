class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos(){
    try {
      return this.atributos();  
    } catch (error) {
      console.log(error) 
    }
  }

  atributos() {
    if (this.estudante != ""){
      return {
        estudante: this.estudante,
        idade: this.idade,
        turma: this.turma
      };
    } else {
      throw new MeuErro("Há campos que não foram informados")
    }
  }
}

const estudante = new NerdIF("", 16, " 3a");
console.log(estudante.retornarAtributos());

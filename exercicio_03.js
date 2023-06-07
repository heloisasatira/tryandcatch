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

  mostrarAtributos(){
    try {
      return this.atributos();  
    } catch (error) {
      console.log(error) 
    }
  }

  atributos() {
    if(this.estudante != "" && this.cosplay != "" && this.nota_cosplay != ""){
      return{
        estudante: this.estudante,
        cosplay: this.cosplay,
        nota_cosplay: this.nota_cosplay
      }
    } else {
      throw new MeuErro("É necessário informar alguns campos")
    }
  }
}
const aluno = new MeuErro("", "Homem-Aranha ", 9.5);
console.log(aluno.mostrarAtributos());

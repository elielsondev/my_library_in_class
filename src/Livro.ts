export default class Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;

  constructor(titulo: string, autor: string) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true;
  }

  emprestar(): void {
    if (!this.disponivel) {
      throw new Error(`O livro "${this.titulo}" já está emprestado.`);
    }
    this.disponivel = false;
  }

  devolver(): void {
    if (this.disponivel) {
      throw new Error(`O livro "${this.titulo}" já está disponível.`);
    }
    this.disponivel = true;
  }
}

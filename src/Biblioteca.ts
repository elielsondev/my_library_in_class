import Livro from "./Livro"; 

export default class Biblioteca {
  nome: string;
  livros: Livro[];

  constructor(nome: string) {
    this.nome = nome;
    this.livros = [];
  }

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  async emprestarLivro(titulo: string): Promise<void> {
    console.log(`Tentando emprestar: ${titulo}...`);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simula operação assíncrona

    const livro = this.livros.find((l) => l.titulo === titulo);
    if (!livro) throw new Error(`Livro "${titulo}" não encontrado.`);
    livro.emprestar();

    console.log(`${titulo} emprestado com sucesso.`);
  }

  async devolverLivro(titulo: string): Promise<void> {
    console.log(`Tentando devolver: ${titulo}...`);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simula operação assíncrona

    const livro = this.livros.find((l) => l.titulo === titulo);
    if (!livro) throw new Error(`Livro "${titulo}" não encontrado.`);
    livro.devolver();

    console.log(`${titulo} devolvido com sucesso.`);
  }

  listarLivros(): void {
    console.log(`Livros na biblioteca "${this.nome}":`);
    this.livros.forEach((l) =>
      console.log(
        `- ${l.titulo} (${l.autor}) -> ${
          l.disponivel ? "Disponível" : "Emprestado"
        }`
      )
    );
  }
}
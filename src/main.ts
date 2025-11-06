import Biblioteca from "./Biblioteca";
import Livro from "./Livro";

async function main() {
  const biblioteca = new Biblioteca("Biblioteca Legal");

  // Adicionando livros
  biblioteca.adicionarLivro(new Livro("Dom Casmurro", "Machado de Assis"));
  biblioteca.adicionarLivro(new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry"));
  biblioteca.adicionarLivro(new Livro("1984", "George Orwell"));

  biblioteca.listarLivros();

  // Tentando emprestar e devolver
  try {
    await biblioteca.emprestarLivro("1984");
    biblioteca.listarLivros();

    await biblioteca.devolverLivro("1984");
    biblioteca.listarLivros();
  } catch (err) {
    console.error("❌ Erro:", (err as Error).message);
  }
}

main();

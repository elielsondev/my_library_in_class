"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Biblioteca_1 = __importDefault(require("./Biblioteca"));
const Livro_1 = __importDefault(require("./Livro"));
async function main() {
    const biblioteca = new Biblioteca_1.default("Biblioteca Legal");
    // Adicionando livros
    biblioteca.adicionarLivro(new Livro_1.default("Dom Casmurro", "Machado de Assis"));
    biblioteca.adicionarLivro(new Livro_1.default("O Pequeno Príncipe", "Antoine de Saint-Exupéry"));
    biblioteca.adicionarLivro(new Livro_1.default("1984", "George Orwell"));
    biblioteca.listarLivros();
    // Tentando emprestar e devolver
    try {
        await biblioteca.emprestarLivro("1984");
        biblioteca.listarLivros();
        await biblioteca.devolverLivro("1984");
        biblioteca.listarLivros();
    }
    catch (err) {
        console.error("❌ Erro:", err.message);
    }
}
main();

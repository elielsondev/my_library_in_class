"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }
    emprestar() {
        if (!this.disponivel) {
            throw new Error(`O livro "${this.titulo}" já está emprestado.`);
        }
        this.disponivel = false;
    }
    devolver() {
        if (this.disponivel) {
            throw new Error(`O livro "${this.titulo}" já está disponível.`);
        }
        this.disponivel = true;
    }
}
exports.default = Livro;

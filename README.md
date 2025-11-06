# my_library_in_class

📚 Sistema de Gerenciamento de Livros
🧠 POO + ⚡ Async/Await + 💻 TypeScript

🧩 Descrição do Projeto

Este projeto é um sistema simples para gerenciar livros de uma biblioteca, desenvolvido em TypeScript e estruturado com Programação Orientada a Objetos (POO).
O código demonstra o uso prático de métodos assíncronos (async/await), simulando operações como empréstimo e devolução de livros em um ambiente assíncrono (como se fosse um banco de dados ou API real).

🚀 Funcionalidades

✅ Cadastro e listagem de livros
✅ Empréstimo e devolução de livros
✅ Verificação automática de disponibilidade
✅ Simulação de operações assíncronas com await
✅ Tratamento de erros com try/catch
✅ Arquitetura modular (classes separadas)

🧱 Estrutura do Projeto
src/

 ├── Livro.ts         # Classe que representa um livro

 ├── Biblioteca.ts    # Classe que gerencia os livros

 └── main.ts          # Função principal (assíncrona)

tsconfig.json         # Configuração do TypeScript

🧠 Conceitos utilizados
Conceito descrição
POO (Programação Orientada a Objetos) Uso de classes, métodos e encapsulamento
Async/Await - Simulação de chamadas assíncronas
Promises - Controle de fluxo assíncrono
Tratamento de Erros - Uso de try/catch para capturar exceções
Modularização - Separação de responsabilidades entre arquivos

⚙️ Como Executar o Projeto

Clone o repositório

```git clone https://github.com/elielsondev/my_library_in_class```

```cd my_library_in_class```

Instale as dependências

`npm install typescript --save-dev`

Compile o TypeScript

`npx tsc`

Execute o projeto

`node dist/main.js`

🧩 Exemplo de Saída
📚 Livros na biblioteca "Biblioteca Central":

- Dom Casmurro (Machado de Assis) -> Disponível
- O Pequeno Príncipe (Antoine de Saint-Exupéry) -> Disponível
- 1984 (George Orwell) -> Disponível

Tentando emprestar "1984"...
✅ "1984" emprestado com sucesso.

📚 Livros na biblioteca "Biblioteca Central":

- 1984 (George Orwell) -> Emprestado

Tentando devolver "1984"...
📘 "1984" devolvido com sucesso.

Elielson do Nascimento Ramos
Projeto desenvolvido como exercício prático de Programação Orientada a Objetos com TypeScript e Async/Await.

“Grandes coisas fez o Senhor por nós, e por isso estamos alegres.”

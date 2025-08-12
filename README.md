# Kanban E2E – Testes Automatizados com Cypress

## Descrição

Este repositório contém os testes automatizados de ponta a ponta (E2E) desenvolvidos com **Cypress** para validar funcionalidades principais da aplicação **Kanban**.  
O objetivo é garantir que o fluxo de uso esteja funcionando corretamente e identificar possíveis pontos de melhoria.

## Funcionalidades testadas

Os testes cobrem:

1. Criação de nova lista  
2. Criação de nova tarefa  
3. Adição de tag a uma tarefa  
4. Exclusão de lista  
5. Alteração do tema para claro e verificação da cor de fundo

## Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) – Framework de testes E2E  
- Node.js – Ambiente de execução  
- Git – Controle de versão

## Estrutura do projeto

```
.
├── cypress
│   ├── e2e
│   │   └── kukac-teste.cy.js
│   ├── fixtures
│   ├── support
├── package.json
├── README.md
```

## Pré-requisitos

Antes de rodar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)  
- [Git](https://git-scm.com/)  
- Gerenciador de pacotes **npm** ou **yarn**

## Instalação

Clone o repositório:

```bash
git clone https://github.com/ggvinos/ggvinos-teste-pratico-kukac-Kanban-E2E.git
```

Acesse o diretório:

```bash
cd ggvinos-teste-pratico-kukac-Kanban-E2E
```

Instale as dependências:

```bash
npm install
```

## Executando os testes

```bash
npx cypress open
```


## Documentação dos erros encontrados

A documentação com todos os erros, problemas de usabilidade, inconsistências visuais e comportamento inesperado encontrados no site está disponível em:  
https://invincible-calf-ba5.notion.site/Teste-Vaga-Tester-Kukac-24d8ddfe411c80a89c97c0d6e25acd84

## Observações técnicas

Durante o desenvolvimento dos testes, foram identificadas algumas limitações que impactam a automação:

- **Seletores pouco específicos** – A ausência de IDs ou atributos `data-*` nos elementos força o uso de seletores frágeis, como `nth-child` ou combinações de classes, o que pode quebrar os testes em caso de mudanças no layout.  
- **Componentes como SVG ou libs de UI** – Alguns botões e ícones são renderizados como SVG dentro de outros elementos, exigindo o uso de `click({ force: true })` para garantir a interação.  

Mesmo diante dessas limitações, os testes cobrem os fluxos principais do sistema e demonstram que a automação funcional é viável.

## Gostaria de agradecer pela oportunidade e atenção <3!

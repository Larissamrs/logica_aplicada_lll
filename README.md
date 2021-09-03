## Workshop Back end - Reprograma

#### Exercício Lógica aplicada - Arrays, Objetos e Métodos.

**Professora: Simara Conceição**

**Aluna: Larissa Maria**



​	Desafio proposta da semana 4: 

Criar um sistema que armazena informações de livros para que seja possível gerencia:

**1-** _Crie uma pasta que irá conter os arquivos abaixo:_

- _README.md_

- _app.js_

- _database.js_

- _Inicialize o npm :  npm init -y_

- _Crie o script de start:_

- _Crie o script start no package.json: "scripts": { "start": "nodemon app.js" }_

- _Crie o .gitignore (node_modules)_

- _Instale as dependências nodemon e readline-sync: npm i --save readline-sync nodemo_

  

No arquivo database.js foi construído o array livros  contendo objetos de classe anônima que foram exportado por meio do module.exports = livros:

````
const livros = [
    {
        "nome": 'Estruturas de dados e algoritmos com JavaScript',
        "categoria": 'programacao',
        "paginas": 408,
        "lido": false,
        "recomendado": true
    },
    {
        "nome": 'Código Limpo, habilidades práticas do Agile Software',
        "categoria": 'programacao',
        "paginas": 456,
        "lido": false,
        "recomendado": true
    },
    {
        "nome": 'Use a cabeça! Java',
        "categoria": 'programacao',
        "paginas": 496,
        "lido": true,
        "recomendado": false
    },
    {
        "nome": 'O poder do subconsciente',
        "categoria": 'Autoajuda',
        "paginas": 308,
        "lido": false,
        "recomendado": true
    },
    {
        "nome": 'O poder do foco',
        "categoria": 'Autoajuda',
        "paginas": 112,
        "lido": false,
        "recomendado": false
    },
    {
        "nome": 'Os quatro compromissos',
        "categoria": 'Autoajuda',
        "paginas": 112,
        "lido": false,
        "recomendado": false
    },
    {
        "nome": 'O Mito da Beleza: Como as imagens de beleza são usadas contra as mulheres',
        "categoria": 'feminismo',
        "paginas": 490,
        "lido": false,
        "recomendado": true

    },
    {
        "nome": 'O que o Sol faz com As Flores',
        "categoria": 'poesia',
        "paginas": 256,
        "lido": true,
        "recomendado": true
    },
    {
        "nome": 'Vade Mecum 2021',
        "categoria": 'direito',
        "paginas": 2576,
        "lido": true,
        "recomendado": true 
    }
]
module.exports = livros
````



**3-** No arquivo app.js desenvolva sua lógica para o comportamento abaixo:
deverá ser possível buscar livros pela categoria

Me recomenda livros pra ler? Deverá listar livros que já foram lidos e que são recomendados

Minha lista de desejo: Deverá listar livros que ainda não foram lidos

Caso a pessoa usuária não escolha uma forma de busca, deverá mostrar todos os livros cadastrados, ordenados de forma crescente por quantidade de páginas


const livros = require("./database");

livros.sort(function (a, b) {
  return a.páginas > b.páginas ? 1 : b.páginas > a.páginas ? -1 : 0;
});

const input = require("readline-sync");

const pegarCategoria = input.question(
  "Voce deseja encontrar um livro por categoria? (s/n)"
);

if (pegarCategoria.toLocaleUpperCase() === "S") {
  console.log("Categorias disponiveis:");
  console.log("programacao", "Autoajuda", "direito", "poesia", "feminismo");

  const escolhaCategoria = input.question("Gostaria de acessar qual categoria?");

  const categoria = livros.filter(livro => livro.categoria === escolhaCategoria
  );

  console.table(categoria);
} else {
  console.log("Categorias disponiveis:  ");
  console.table(livros);
}

const sugestaoLeitura = input.question(
  "Gostaria de acessar a lista de recomendados para leitura? (s/n)"
);

if (sugestaoLeitura.toLocaleUpperCase() === "S") {
  console.log("Lista de recomendados: ");

  const recomendados = livros.filter(livro => livro.recomendado === true && livro.lido === true);

  console.table(recomendados);
} else {
  console.log("Livros disponiveis:  ");
  console.table(livros);
}

const naoLidos = input.question(
  "Deseja acessar os livros que nao foram lidos? (s/n)"
);

if (naoLidos.toLocaleUpperCase() === "S") {
  console.log("Livros que ainda nao foram lidos:");

  const deseja = livros.filter(livro => livro.lido === false);
  console.table(deseja);
} else {
  console.log("Livros disponiveis:  ");
  console.table(livros);
}
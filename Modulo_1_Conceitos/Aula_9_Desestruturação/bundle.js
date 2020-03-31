"use strict";

var usuario = {
  nome: "Diego",
  idade: 23,
  endereço: {
    cidade: "Rio do Sul",
    estado: 'SC',
    numero: 5
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereO = usuario.endereço,
    cidade = _usuario$endereO.cidade,
    numero = _usuario$endereO.numero;
var n = usuario.endereço.numero;

function soma(n, numero1) {
  var numero3 = numero + numero1;
  console.log('Hello World', numero3);
}

soma(n, 3);
console.log(nome);
console.log(idade);

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome(usuario);

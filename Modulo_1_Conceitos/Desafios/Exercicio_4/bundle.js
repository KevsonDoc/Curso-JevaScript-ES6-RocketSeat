"use strict";

console.log('=====================================================\n 4.1');
var empresa = {
  name: 'Rocketseat',
  endereco: {
    cidade: 'Rio do sul',
    estado: 'SC'
  }
};
var name = empresa.name,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(name, '\n', cidade, '\n', estado);
console.log('=====================================================\n 4.2');

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
console.log('=====================================================\n 4.2');

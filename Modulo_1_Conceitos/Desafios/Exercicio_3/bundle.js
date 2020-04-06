"use strict";

console.log('=====================================================\n 3.1');
var arr = [1, 2, 3, 4, 5];
console.log(arr.map(function (item) {
  return item + 10;
}));
console.log('=====================================================\n 3.2');
var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostrarIdade = function mostrarIdade(usuario) {
  return usuario.idade;
};

console.log(mostrarIdade(usuario));
console.log('=====================================================\n 3.3');
var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
console.log('=====================================================\n 3.4');

var promise = function promise() {
  return new Promise(resolve, function (reject) {
    return resolve();
  });
};

console.log(promise);
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

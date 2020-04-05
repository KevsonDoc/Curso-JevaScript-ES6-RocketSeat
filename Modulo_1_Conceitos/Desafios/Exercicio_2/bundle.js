"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresas: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Rocketseat'
}]; //2.1

console.log('=========================================================== \n Execicio 2.1');
var idadeArr = usuarios.map(function (users) {
  return users.idade;
});
console.log(idadeArr);
console.log('=========================================================== \n Exercicio 2.2'); //2.2

var filt = usuarios.filter(function (users) {
  return users.idade >= 18;
});
console.log(filt);
console.log('=========================================================== \n Exercicio 2.3'); //2.3

var find = usuarios.find(function (users) {
  return users.empresa === 'Google';
});
console.log(find);
console.log('=========================================================== \n Exercicio 2.4'); //2.4

var multIdade = usuarios.map(function (users) {
  return {
    users: users,
    idade: users.idade * 2
  };
}).filter(function (users) {
  return users.idade <= 50;
});
console.log(multIdade);

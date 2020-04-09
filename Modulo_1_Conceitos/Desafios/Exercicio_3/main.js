console.log('=====================================================\n 3.1');
const arr = [1, 2, 3, 4, 5];
console.log(arr.map( item => item + 10));

console.log('=====================================================\n 3.2');
const usuario = { nome:'Diego', idade: 23 };

const mostrarIdade = (usuario => usuario.idade);
console.log(mostrarIdade(usuario));

console.log('=====================================================\n 3.3');
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

console.log('=====================================================\n 3.4');
const promise = () => new Promise(resolve,reject => resolve());
console.log(promise);

const usuarios = [
    { nome: 'Diego', idade: 23, empresas:'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Rocketseat' },
];
//2.1
console.log('=========================================================== \n Execicio 2.1');
const idadeArr = usuarios.map(users => users.idade);
console.log(idadeArr);


console.log('=========================================================== \n Exercicio 2.2');
//2.2
const filt = usuarios.filter(users => users.idade >= 18);
console.log(filt);

console.log('=========================================================== \n Exercicio 2.3');
//2.3
const find = usuarios.find(users => users.empresa === 'Google');
console.log(find);

console.log('=========================================================== \n Exercicio 2.4');
//2.4
const multIdade = usuarios.map(users => ({ users, idade : users.idade * 2 })).filter(users => users.idade <= 50);
console.log(multIdade);

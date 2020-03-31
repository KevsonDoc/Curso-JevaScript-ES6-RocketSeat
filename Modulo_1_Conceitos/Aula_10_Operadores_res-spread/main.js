//REST

const usuario = {
    nome: 'Diego',
    idade: '23',
    empresa: 'Rocketseat'
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

//COM ARRAY

const arr = [1, 2, 3, 4];

const [a , b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//REST OPER PARA PARÂMETOR DE FUNÇÕES

function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log('sdfsdf', soma(1, 3, 4));

//Spread

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

//Outro exemplo: quero criar um novo objeto de usuario com todas as mesmar propriedades porem quero trocar uma das propiedades

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};
console.log(usuario1);

const usuario2 = { ...usuario1, nome: 'Gabriel' };
console.log(usuario2);


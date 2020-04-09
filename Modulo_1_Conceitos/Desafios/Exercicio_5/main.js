console.log('===========================================================\n5');
const array = [1, 2, 3, 4, 5, 6];
const [x, ...y] = array;
console.log(x);
console.log(y);

function soma(...params) {
    return params.reduce((a, b) => a + b);
}
console.log(soma(1, 2, 3, 4, 5, 6));

console.log('===========================================================\n5.1');
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereço: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
const usuario2 = { ...usuario, nome: "Gabriel" }
const usuario3 = { ...usuario, endereço: { ...usuario.endereço, cidade: "Lontras" } }
console.log(usuario2);
console.log(usuario3);
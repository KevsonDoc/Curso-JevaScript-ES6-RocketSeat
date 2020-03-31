const usuario = {
    nome: "Diego",
    idade: 23,
    endereço: {
        cidade: "Rio do Sul",
        estado: 'SC',
        numero: 5
    },
};

const { nome, idade, endereço: { cidade, numero } } = usuario;

const n = usuario.endereço.numero;

function soma(n, numero1){
    var numero3 = numero + numero1;
    console.log('Hello World' , numero3);
}

soma(n, 3);

console.log(nome);
console.log(idade);

function mostraNome({ nome }){
    console.log(nome);
}

mostraNome(usuario);
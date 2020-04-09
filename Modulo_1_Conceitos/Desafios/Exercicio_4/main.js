console.log('=====================================================\n 4.1');
const empresa = {
    name: 'Rocketseat',
    endereco: {
        cidade: 'Rio do sul',
        estado: 'SC',
    }
};
const { name, endereco: { cidade, estado } } = empresa;
console.log(name, '\n', cidade, '\n', estado);

console.log('=====================================================\n 4.2');
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

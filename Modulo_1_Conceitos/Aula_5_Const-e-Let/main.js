//Retorna um erro pois o tipode ariavel constante não se pode ter seu valor reatribuido
console.log('Hello World    ')
    /*const a = 1;
    a = 3;
    console.log(a);
    */

//Porém podemos mutar dessa maneira
const usuario = { nome: 'diego' };
usuario.nome = "Hello World";
console.log(usuario);

//Variavel de escopo
function teste(x) {
    let y = 2;
    if (x > 5) {
        //    let y = 4;
        console.log(x, y);
    }
}
console.log(teste(10));
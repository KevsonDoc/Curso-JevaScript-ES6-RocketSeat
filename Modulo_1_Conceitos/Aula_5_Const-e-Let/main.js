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
"use strict";

var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (intem) {
  return intem * 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    nome: "Diego"
  };
};

console.log(teste());

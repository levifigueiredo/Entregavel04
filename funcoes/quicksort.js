function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
    const pivo = array[array.length - 1];
    const menores = array.filter(num => num < pivo);
    const iguais = array.filter(num => num === pivo);
    const maiores = array.filter(num => num > pivo);
  
    const resultado = [...quicksort(menores), ...iguais, ...quicksort(maiores)];
    console.log(resultado);
    return resultado;
  }
  
  module.exports = quicksort;
  
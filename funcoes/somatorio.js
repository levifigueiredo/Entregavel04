function somatorio(array) {
    const soma = array.reduce((acc, num) => acc + num, 0);
    console.log(`O somatório é: ${soma}`);
    return soma;
  }
  
  module.exports = somatorio;
  
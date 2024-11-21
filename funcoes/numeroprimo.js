function ePrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return false;
    }
    console.log(true);
    return true;
  }
  
  module.exports = ePrimo;
  
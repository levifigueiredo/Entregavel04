function calcularMDC(a, b) {
    while (b !== 0) {
      const resto = a % b;
      a = b;
      b = resto;
    }
    console.log(`O Máximo Divisor Comum (MDC) é: ${a}`);
    return a;
  }
  
  module.exports = calcularMDC;
  
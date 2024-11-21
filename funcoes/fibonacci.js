function fibonacci(n) {
    const sequencia = [0, 1];
    for (let i = 2; i < n; i++) {
      sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }
    console.log(...sequencia);
    return sequencia;
  }
  
  module.exports = fibonacci;
  
const contagem = require('../funcoes/contagem');

test(`contagem 1 a 16 = ${contagem([1, 16])}` , () => {
    const dados = [1, 16];
    const resultado = contagem(dados);
    expect(resultado).toBe(16); 
});

test(`contagem 2 a 9 = ${contagem([2, 9])}` , () => {
  const dados = [2, 9];
  const resultado = contagem(dados);
  expect(resultado).toBe(8); 
});

const fibonacci = require('../funcoes/fibonacci');

test(`fibonacci 8 = ${fibonacci(8).join(', ')}`, () => {
    const resultado = fibonacci(8);
    expect(resultado).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test(`fibonacci 5 = ${fibonacci(5).join(', ')}`, () => {
    const resultado = fibonacci(5);
    expect(resultado).toEqual([0, 1, 1, 2, 3]);
});


  const mdc = require('../funcoes/mdc');

  test(`mdc 56, 98 = ${mdc(56, 98)}`, () => {
      const resultado = mdc(56, 98);
      expect(resultado).toBe(14);
  });
  
  test(`mdc 24, 36 = ${mdc(24, 36)}`, () => {
      const resultado = mdc(24, 36);
      expect(resultado).toBe(12);
  });
  

const quicksort = require('../funcoes/quicksort');

test(`quicksort [8, 3, 1, 7, 0, 10, 2] = ${quicksort([8, 3, 1, 7, 0, 10, 2])}`, () => {
    const array = [8, 3, 1, 7, 0, 10, 2];
    const resultado = quicksort(array);
    expect(resultado).toEqual([0, 1, 2, 3, 7, 8, 10]);
});

test(`quicksort [5, 9, 2, 1, 6, 4, 3] = ${quicksort([5, 9, 2, 1, 6, 4, 3])}`, () => {
    const array = [5, 9, 2, 1, 6, 4, 3];
    const resultado = quicksort(array);
    expect(resultado).toEqual([1, 2, 3, 4, 5, 6, 9]);
});

const numeroprimo = require('../funcoes/numeroprimo');

test(`numeroprimo 3 = ${numeroprimo(3)}` ,() => {
    expect(numeroprimo(3)).toBe(true);

});

test(`numeroprimo 1 = ${numeroprimo(1)}` , () => {
    expect(numeroprimo(1)).toBe(false);
});

const somatorio = require('../funcoes/somatorio');

test(`somatório [1, 3, 5, 7] = ${somatorio([1, 3, 5, 7])}`, () => {
    const lista = [1, 3, 5, 7];
    const resultado = somatorio(lista);
    expect(resultado).toBe(16);
});

test(`somatório [10, 20, 30] = ${somatorio([10, 20, 30])}`, () => {
    const lista = [10, 20, 30];
    const resultado = somatorio(lista);
    expect(resultado).toBe(60);
});

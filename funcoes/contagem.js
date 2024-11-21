function contagem(dados) {
  let primeiro = dados[0];
  let ultimo = dados[dados.length - 1];
  let contagem = 0;

  for (let i = primeiro; i <= ultimo; i++) {
    contagem++;
  }

  return contagem;
}

module.exports = contagem;
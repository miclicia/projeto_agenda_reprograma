const obterNovoValor = (array) => {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1;
  }
};

const verificarNumero = (array, telefone) => {
  return array.find((contato) => contato.telefone == telefone); //verifica se existe algum contato com o mesmo número
};

module.exports = {
  obterNovoValor,
  verificarNumero,
};

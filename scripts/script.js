class Calculadora {
  get #tela() {
    return document.querySelector('#result');
  }

  preencherTela(valor) {
    if (valor == '=') {
      this.calcular();
      return;
    }
    this.#tela.value += valor;
  }

  resetar() {
    this.#tela.value = '';
  }

  calcular() {
    try {
      let resultado = eval(this.#tela.value);
      this.resetar();
      this.preencherTela(resultado);
    } catch (error) {
      this.resetar();
      this.preencherTela('Valor inválido');

      setTimeout(() =>
        this.resetar()
        , 3000);
    }
  }
}

let calculadora = new Calculadora();

let botoes = document.querySelectorAll('input[type=button]');

for (let botao of botoes) {
  botao.addEventListener('click', function (evento) {
    let elemento = evento.target;
    calculadora.preencherTela(elemento.value);
  });
}

document.querySelector('#clear')
  .addEventListener('click', function () {
    calculadora.resetar();
  });
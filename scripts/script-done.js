class Calculadora {

  get #tela() {
    return document.getElementById("result");
  }

  limparTela() {
    this.#tela.value = "";
  }
  preencherTela(valor) {
    if (valor == '=') {
      this.#tela.value = eval(this.#tela.value);
      return;
    }

    if (this.#tela.value == "undefined") {
      this.#tela.value = "";
    }

    this.#tela.value += valor;
  }
}

let calculadora = new Calculadora();

document.querySelector('#clear')
  .addEventListener('click', function () {
    calculadora.limparTela();
  });

let botoes = document.querySelectorAll('input:not(#clear):not(#result)');

for (let botao of botoes) {
  botao.addEventListener('click', function (evento) {
    let valor = evento.target.value;
    calculadora.preencherTela(valor);
  })
}
class CarteiraDigital {
  #titular;
  #saldo;

  constructor() {
    this.#titular = '';
    this.#saldo = 0;
  }

  definirTitular(nome) {
    if (nome) {
      this.#titular = nome;
      return true;
    } else {
      return false;
    }
  }

  consultarTitular() {
    return this.#titular;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado!`);
      return true;
    } else {
      console.log('Valor inválido!');
      return false;
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado!`);
      return true;
    } else if (valor > this.#saldo) {
      console.log(`Saldo insuficiente! Você tem R$ ${this.#saldo.toFixed(2)}`);
      return false;
    } else {
      console.log('Valor inválido!');
      return false;
    }
  }

  consultarSaldo() {
    return this.#saldo;
  }

  exibirInformacoes() {
    console.log(`Titular: ${this.#titular}`);
    console.log(`Saldo: R$ ${this.#saldo.toFixed(2)}`);
  }
}

module.exports = CarteiraDigital;

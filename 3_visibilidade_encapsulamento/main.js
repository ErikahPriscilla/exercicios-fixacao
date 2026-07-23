const CarteiraDigital = require('./carteiraDigital.js');

const carteira = new CarteiraDigital();

carteira.definirTitular('João Silva');
console.log('Titular:', carteira.consultarTitular());

carteira.depositar(200);
console.log('Saldo:', carteira.consultarSaldo());

carteira.sacar(50);
console.log('Saldo:', carteira.consultarSaldo());

carteira.sacar(500);

carteira.exibirInformacoes();

console.log('FIM DO SISTEMA');

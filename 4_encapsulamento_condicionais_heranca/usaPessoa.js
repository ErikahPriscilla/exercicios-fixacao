const Pessoa = require('./Pessoa.js');
const PF = require('./PF.js');
const Aluno = require('./Aluno.js');
const Professor = require('./Professor.js');

const x = new Pessoa();
let resposta = x.setNome('Erika');
console.log(resposta);
if (resposta) {
  console.log(x.getNome());
} else {
  console.log('Nome vazio');
}

resposta = x.setEmail('erika@email.com');
console.log(resposta);
if (resposta) {
  console.log(x.getEmail());
} else {
  console.log('E-mail vazio');
}

const y = new PF();
resposta = y.setNome('Pedro');
console.log(resposta);
if (resposta) {
  console.log(y.getNome());
}

resposta = y.setCPF('123.456.789-00');
console.log(resposta);
if (resposta) {
  console.log(y.getCPF());
} else {
  console.log('CPF inválido');
}

const w = new Aluno();
resposta = w.setNome('Maria');
console.log(resposta);
if (resposta) {
  console.log(w.getNome());
}
resposta = w.setEmail('maria@email.com');
console.log(resposta);
if (resposta) {
  console.log(w.getEmail());
}
resposta = w.setCPF('123.456.789-00');
console.log(resposta);
if (resposta) {
  console.log(w.getCPF());
}
resposta = w.setMatricula('20123456');
console.log(resposta);
if (resposta) {
  console.log(w.getMatricula());
}
resposta = w.setCurso('ADS');
console.log(resposta);
if (resposta) {
  console.log(w.getCurso());
}
resposta = w.setCurso('SIS');
console.log(resposta);
if (resposta) {
  console.log(w.getCurso());
} else {
  console.log('Curso inválido');
}

import { Cliente } from './Cliente.js'
import { Conta } from './Conta/Conta.js';
import { ContaCorrete } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';

let cliente = new Cliente('Fabio Vieira', '06694364610');
let contaCliente = new ContaCorrete('0001', cliente);

let poupancaCliente = new ContaPoupanca('0001', cliente, 100);
let teste = new Conta('0001', cliente, 0);

poupancaCliente.sacar(9);

console.log(poupancaCliente);
// contaCliente.depositar(100);
// console.log(contaCliente);
// contaCliente.sacar(10);
// console.log(contaCliente);

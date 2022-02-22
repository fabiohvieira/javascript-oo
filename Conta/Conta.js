export class Conta{

    constructor(cliente, agencia, saldoIncial){

        if (this.constructor == Conta) {
            throw new Error("Esta conta não pode ser instanciada.");
        }

        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoIncial;

    }

    depositar(valor){
        if (valor <= 0) {
            throw new Error("O valor não pode ser inferior a 0.");
        }
        this._saldo += valor;
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return this._saldo;
        }
    }


}
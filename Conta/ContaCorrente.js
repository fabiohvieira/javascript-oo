import { Conta } from "./Conta.js";

export class ContaCorrete extends Conta{

    constructor(agencia, cliente){
        super(cliente, agencia, 0);
    }



}
/*

Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. 
Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. 
Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. 
Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade 'categoria' 
preenchida pela função como 'cara', caso contrário, a propriedade 'categoria' será preenchida pela função como 'padrão'. 
O método de consultar trará apenas o último pagamento.

*/

const listaPagamentos = [
    { codigoBarras: "0001-000-000", empresa: "Companhia One SA", valor: 99.00},
    { codigoBarras: "0002-000-000", empresa: "Organização ABC Ltda", valor: 101.00},
    { codigoBarras: "0003-000-000", empresa: "TNT Limitada", valor: 350.00 }
];

class ServicoDePagamento {
  constructor() {
    this.pagamentos = listaPagamentos;
  }
  
  realizaPagamento(codigoBarras, empresa, valor)  {
    const pagamento = {
        codigoBarras,
        empresa,
        valor
    };

    if (valor > 100.00) {
      pagamento.categoria = 'cara';
    } else {
      pagamento.categoria = 'padrão';
    }


    this.pagamentos.push(pagamento);

}

    consultarUltimoPagamento() {
      return this.pagamentos[this.pagamentos.length - 1];

  }
 
}

const servicoDePagamento = new ServicoDePagamento();
export default ServicoDePagamento;
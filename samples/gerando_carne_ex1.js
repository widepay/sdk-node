const moment = require("moment");
const WidePay = require("./WidePay.js");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    cliente: 'Lívia Pontarolo Almeida',
    pessoa: 'Física',
    cpf: '463.384.662-02',
    itens: [
        {
            'descricao': 'Descrição item 1',
            'valor': 20,
            'quantidade': 2,
            'desconto': 4.99
        }, {
            'descricao': 'Descrição item 2',
            'valor': 10,
        }
    ],
    vencimento: moment().add(5, 'days').format('YYYY-MM-DD'),
    parcelas: 6,
    dividir: 'Não',
};

(async () => {
    const widePay = new WidePay(config.widePayId, config.widePayToken);
    const adicionar = await widePay.api('/recebimentos/carnes/adicionar', options)

    if (adicionar.sucesso) {
        console.log(adicionar.id); // ID do carnê gerado
        console.log(adicionar.link); // Link do carnê gerado
        console.log(adicionar.cobrancas); // Imprime todos os IDS das cobranças geradas
    } else {
        console.log(adicionar.erro);
        if (adicionar.erro === 'Erro na validação dos campos.') {
            console.log(adicionar.validacao); // Imprime os erros de validação
        }
    }
    console.log(adicionar)
})()
const moment = require("moment");
const WidePay = require("./WidePay.js");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    forma: 'Cartão',
    cliente: 'Lívia Pontarolo Almeida',
    pessoa: 'Física',
    cpf: '463.384.662-02',
    vencimento: moment().add(5, 'days').format('YYYY-MM-DD'),
    itens: [
        {
            'descricao': 'Descrição item 1',
            'valor': 10,
        }
    ],
};

(async () => {
    const widePay = new WidePay(config.widePayId, config.widePayToken);
    const adicionar = await widePay.api('/recebimentos/cobrancas/adicionar', options)

    if (adicionar.sucesso) {

        console.log(adicionar.id); // ID da cobrança gerada
        console.log(adicionar.link); // Link da cobrança gerada

    } else {

        console.log(adicionar.erro);

        if (adicionar.erro === 'Erro na validação dos campos.') {
            console.log(adicionar.validacao); // Imprime os erros de validação
        }

    }
    console.log(adicionar)
})()
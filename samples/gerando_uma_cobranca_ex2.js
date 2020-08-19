const moment = require("moment");
const WidePay = require("./WidePay.js");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    forma: 'Cartão,Boleto',
    cliente: 'Lívia Pontarolo Almeida',
    pessoa: 'Física',
    cpf: '463.384.662-02',
    email: 'emaildalivia@gmail.com',
    telefone: '67 98888-0000',
    endereco: {
        rua: 'Rua Primeiro de Julho',
        numero: '192',
        bairro: 'Vila Carvalho',
        complemento: 'Sala 25',
        cep: '79005-610',
        cidade: 'Campo Grande',
        estado: 'MS',
        coletar: 'Sim',
    },
    vencimento: moment().add(5, 'days').format('YYYY-MM-DD'),
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
    referencia: 'Fatura 12345',
    notificacao: 'http://www.minhaaplicacao.com/script-notificacao.php',
    redirecionamento: 'http://www.minhaaplicacao.com/script-redirecionamento.php'
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
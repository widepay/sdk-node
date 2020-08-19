const moment = require("moment");
const WidePay = require("wide-pay-node");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    cliente: 'Lívia Pontarolo Almeida',
    pessoa: 'Física',
    cpf: '463.384.662-02',
    email: 'emaildalivia@gmail.com',
    telefone: '67 98888-0000',
    endereco: {
        rua: 'Rua Primeiro de Julho',
        numero: '192',
        complemento: 'Sala 25',
        bairro: 'Vila Carvalho',
        cep: '79005-610',
        cidade: 'Campo Grande',
        estado: 'MS'
    },
    itens: [
        {
            descricao: 'Descrição item 1',
            valor: 20,
            quantidade: 2,
            desconto: 4.99
        },
        {
            descricao: 'Descrição item 2',
            valor: 10.50
        }
    ],
    referencia: 'Fatura 12345',
    notificacao: 'http://www.minhaaplicacao.com/script-notificacao.php',
    vencimento: moment().add(5, 'days').format('YYYY-MM-DD'),
    parcelas: '6',
    dividir: 'Não',
    enviar: 'E-mail',
    mensagem: 'Mensagem personalizada no e-mail',
    marketplace: [
        {
            carteira: 10500,
            valor: 10,
            item: 0
        }, {
            carteira: 10800,
            valor: 5
        }
    ],
    boleto: {
        desconto: 4.5,
        multa: 2,
        juros: 1,
        instrucoes: [
            'Instrução personalizada ao cliente, linha 1',
            'Instrução personalizada ao cliente, linha 2'
        ]
    }
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
const WidePay = require("wide-pay-node");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    id: request.body.notificacao
};

(async () => {
    const widePay = new WidePay(config.widePayId, config.widePayToken);
    const notificacao = await widePay.api('/recebimentos/cobrancas/notificacaor', options)

    if (notificacao.sucesso) {
        console.log(notificacao.cobranca['id']); // ID da cobrança
        console.log(notificacao.cobranca['status']); // Status da cobrança
        console.log(notificacao.cobranca); // Imprime todos os dados da cobrança
    } else {
        console.log(notificacao.erro); // Erro
    }
    console.log(notificacao)
})()
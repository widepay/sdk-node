const WidePay = require("wide-pay-node");

const config = {
    widePayId: '406218',
    widePayToken: 'c257c157c07f397dfdf5496258b33d86'
};

const options = {
    id: '4509FBB5977E4854',
    atualizar: 'Não',
    html: 'Sim',
    carne: 'Não'
};

(async () => {
    const widePay = new WidePay(config.widePayId, config.widePayToken);
    const boleto = await widePay.api('/recebimentos/cobrancas/boleto', options)

    if (boleto.sucesso) {

        console.log(boleto.parametros); // Imprime os parâmetros de configuração do boleto

        console.log(boleto.codigo); // Código de barras do boleto
        console.log(boleto.html); // HTML do boleto

    } else {

        console.log(boleto.erro); // Erro

    }
    console.log(boleto)
})()